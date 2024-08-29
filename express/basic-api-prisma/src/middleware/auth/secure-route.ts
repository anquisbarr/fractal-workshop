import type { NextFunction, Request, Response } from "express";
import { jwtVerify } from "jose";
import { env } from "../../config/env";
import getUser from "../../services/get-user";
import type { WithEmail, WithUser } from "../../types/common";

function decodeBase64Secret(base64Secret: string) {
	return Buffer.from(base64Secret, "base64");
}

async function parseToken(authorization: string): Promise<WithEmail | null> {
	try {
		const token = authorization.split(" ")[1];
		const secret = decodeBase64Secret(env.JWT_SECRET);
		const { payload } = await jwtVerify(token, secret);
		return payload as unknown as WithEmail;
	} catch (err) {
		console.log(err);
		return null;
	}
}

export async function secureRoute(
	req: WithUser<Request>,
	res: Response,
	next: NextFunction,
) {
	const { authorization } = req.headers;

	if (!authorization) {
		return res.sendStatus(401);
	}

	const payload = await parseToken(authorization);
	if (!payload) return res.status(401).send({ msg: "Unauthorized" });

	const user = await getUser({ email: payload.email });
	if (!user) return res.status(401).send({ msg: "Unauthorized" });

	req.user = user;

	next();
}

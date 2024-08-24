import type { NextFunction, Request, Response } from "express";
import { jwtVerify } from "jose";
import { env } from "../config/env";

function decodeBase64Secret(base64Secret: string) {
	return Buffer.from(base64Secret, "base64");
}

export async function secureRoute(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const authHeader = req.headers.authorization;
	const token = authHeader?.split(" ")[1];
	console.log(token);

	if (!token) {
		return res.sendStatus(401);
	}

	try {
		const secret = decodeBase64Secret(env.JWT_SECRET);

		const { payload } = await jwtVerify(token, secret);

		console.log(payload);
		next();
	} catch (err) {
		console.error(err);
		return res.sendStatus(403); // Forbidden if token is invalid
	}

	next();
}

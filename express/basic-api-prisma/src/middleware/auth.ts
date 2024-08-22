import type { NextFunction, Request, Response } from "express";

export async function secureRoute(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const { authorization } = req.headers;
	if (!authorization) {
		return res.status(401).json({ message: "Missing authorization header" });
	}
	next();
}

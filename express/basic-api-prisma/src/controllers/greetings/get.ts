import type { Request, Response } from "express";

export function getGreeting(_: Request, res: Response) {
	res.status(200).send({ msg: "Hello World 👑!" });
}

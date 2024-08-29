import type { Request } from "express";
import type { WithUser } from "../types/common";

export const parsePaginationFromQuery = (req: Request) => {
	const { page = "1", pageSize = "0" } = req.query;
	return {
		page: Number.parseInt(page as string, 10),
		pageSize: Number.parseInt(pageSize as string, 10),
	};
};

export const parseEmailFromRequest = (req: WithUser<Request>) => {
	if (!req.user) throw new Error("User not found");
	return req.user.email as string;
};

export function parseUuidFromRequest(req: WithUser<Request>) {
	const { uuid } = req.params;
	if (!uuid) throw new Error("UUID not found");
	return { uuid: uuid as string };
}

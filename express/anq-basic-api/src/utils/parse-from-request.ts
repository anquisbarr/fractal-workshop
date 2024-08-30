import type { Request } from "express";

export const parsePaginationFromRequest = (req: Request) => {
	const { page = "1", pageSize = "10" } = req.query;
	return {
		page: Number.parseInt(page as string, 10),
		pageSize: Number.parseInt(pageSize as string, 10),
	};
};

export const parseCategoryNameFromRequest = (req: Request) => {
	const { name } = req.params;
	if (!name) throw Error("Category name is required");
	return name as string;
};

export const parseCategoryIdFromRequest = (req: Request) => {
	const { id } = req.params;
	if (!id) throw Error("Category id is required");
	return Number.parseInt(id as string, 10);
};

export const parseProductNameFromRequest = (req: Request) => {
	const { name } = req.params;
	if (!name) throw Error("Category name is required");
	return name as string;
};

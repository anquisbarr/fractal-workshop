import { fetchCategories } from "@services/category/fetch-categories";
import { parsePaginationFromRequest } from "@utils/parse-from-request";
import type { Request, Response } from "express";

export default async function fetchCategoryController(
	req: Request,
	res: Response,
) {
	try {
		const { page, pageSize } = parsePaginationFromRequest(req);

		const categories = await fetchCategories({ page, pageSize });
		if (!categories) return res.status(404).send({ msg: "Category not found" });
		return res.status(200).send(categories);
	} catch (err) {
		console.log("[Controller][fetchCategory] ", err);
		return res.sendStatus(500);
	}
}

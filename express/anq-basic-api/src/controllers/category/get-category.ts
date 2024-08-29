import getCategory from "@services/category/get-category";
import {
	parseCategoryIdFromRequest,
	parsePaginationFromRequest,
} from "@utils/parse-from-request";
import type { Request, Response } from "express";
import type { WithCategoryId } from "types/common";

export default async function getCategoryController(
	req: WithCategoryId<Request>,
	res: Response,
) {
	try {
		const { page, pageSize } = parsePaginationFromRequest(req);
		const id = parseCategoryIdFromRequest(req);

		const category = await getCategory({ id, page, pageSize });
		if (!category) return res.sendStatus(404);

		res.send(category);
	} catch (err) {
		console.log("[Controller][getCategoryById] ", err);
		res.sendStatus(500);
	}
}

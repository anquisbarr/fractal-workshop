import type { Category } from "@prisma/client";
import { getAllCategories } from "@repository/category/fetch-categories";
import type { FetchResponse } from "../../types/common";
import type { PaginationDto } from "../../types/dto/pagination";

export async function fetchCategories({
	page,
	pageSize,
}: PaginationDto): Promise<FetchResponse<Category[]>> {
	try {
		const categories = await getAllCategories({ page, pageSize });
		if (!categories) throw new Error("Categories not found");
		return {
			data: categories,
			meta: {
				page,
				pageSize,
			},
		};
	} catch (err) {
		console.log("[fetchCategories] error", err);

		return {
			data: [],
			meta: {
				page,
				pageSize,
			},
		};
	}
}

import type { Product } from "@prisma/client";
import { getAllProducts } from "@repository/products/fetch-products";
import type { FetchResponse } from "types/common";
import type { PaginationDto } from "types/dto/pagination";

export default async function fetchProducts({
	page,
	pageSize,
}: PaginationDto): Promise<FetchResponse<Product[]> | null> {
	try {
		const products = await getAllProducts({ page, pageSize });
		if (!products) throw new Error("Products not found");

		return {
			data: products,
			meta: {
				page,
				pageSize,
			},
		};
	} catch (err) {
		return {
			data: [],
			meta: {
				page,
				pageSize,
			},
		};
	}
}

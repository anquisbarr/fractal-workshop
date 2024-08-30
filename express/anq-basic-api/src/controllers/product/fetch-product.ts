import fetchProducts from "@services/product/fetch-products";
import { parsePaginationFromRequest } from "@utils/parse-from-request";
import type { Request, Response } from "express";

export default async function fetchProductController(
	req: Request,
	res: Response,
) {
	try {
		const { page, pageSize } = parsePaginationFromRequest(req);

		const product = await fetchProducts({ page, pageSize });
		if (!product) return res.status(404).send({ msg: "Category not found" });
		return res.status(200).send(product);
	} catch (err) {
		console.log("[Controller][fetchCategory] ", err);
		return res.sendStatus(500);
	}
}

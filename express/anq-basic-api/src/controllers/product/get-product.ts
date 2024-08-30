import getProduct from "@services/product/get-product";
import { parseProductNameFromRequest } from "@utils/parse-from-request";
import type { Request, Response } from "express";
import type { WithProductName } from "types/common";

export default async function getProductController(
	req: WithProductName<Request>,
	res: Response,
) {
	try {
		const name = parseProductNameFromRequest(req);

		const product = await getProduct({ name });
		if (!product) return res.sendStatus(404);

		res.send(product);
	} catch (err) {
		console.log("[Controller][getProductByName] ", err);
		res.sendStatus(500);
	}
}

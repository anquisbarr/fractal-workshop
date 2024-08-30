import type { Category } from "@prisma/client";
import { getProductByName } from "@repository/products/get-product-by-name";
import type { SingleServiceResponse, WithProductName } from "types/common";

export default async function getProduct({
	name,
}: WithProductName): Promise<SingleServiceResponse<Category> | null> {
	try {
		const product = await getProductByName({ name });
		if (!product) return null;

		return {
			data: product,
			meta: undefined,
		};
	} catch (err) {
		console.error("[Service][getProductByName] ", err);
		return null;
	}
}

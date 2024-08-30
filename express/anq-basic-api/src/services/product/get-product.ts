import type { Product } from "@prisma/client";
import { getProductByName } from "@repository/products/get-product-by-name";
import type { SingleServiceResponse, WithProductName } from "types/common";

export default async function getProduct({
	name,
}: WithProductName): Promise<SingleServiceResponse<Product[]> | null> {
	try {
		const products = await getProductByName({ name });
		if (!products || products.length === 0) return null;

		return {
			data: products,
			meta: undefined,
		};
	} catch (err) {
		console.error("[Service][getProductByName] ", err);
		return null;
	}
}

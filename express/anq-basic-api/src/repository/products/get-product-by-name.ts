import { db } from "@config/db";
import type { Product } from "@prisma/client";
import type { WithProductId, WithProductName } from "types/common";

export async function getProductByName({
	name,
}: WithProductName): Promise<Product | null> {
	return db.product.findFirst({
		where: {
			name: {
				equals: name,
				mode: "insensitive",
			},
		},
	});
}

export async function getProductsByCategoryId({
	id: categoryId,
}: WithProductId): Promise<Product[] | null> {
	return db.product.findMany({
		where: {
			categoryId,
		},
	});
}

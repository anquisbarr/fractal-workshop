import { db } from "@config/db";
import type { Category } from "@prisma/client";
import type { WithCategoryId } from "types/common";

export async function getCategoryById({
	id,
}: WithCategoryId): Promise<Category | null> {
	return db.category.findUnique({
		where: {
			id,
		},
	});
}

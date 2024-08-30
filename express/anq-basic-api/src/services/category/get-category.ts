import type { Category } from "@prisma/client";
import { getCategoryById } from "@repository/category/get-category";
import type { SingleServiceResponse, WithCategoryId } from "types/common";

export default async function getCategory({
  id,
}: WithCategoryId): Promise<SingleServiceResponse<Category> | null> {
  try {
    const category = await getCategoryById({ id });
    if (!category) return null;

    console.log(category);

    return {
      data: category,
      meta: undefined,
    };
  } catch (err) {
    console.error("[Service][getCategoryById] ", err);
    return null;
  }
}

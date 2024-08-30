import { db } from "@config/db";
import type { Category } from "@prisma/client";
import type { PaginationDto } from "types/dto/pagination";

export async function getAllCategories({
  page,
  pageSize,
}: PaginationDto): Promise<Category[] | null> {
  const skip = (page - 1) * pageSize;
  const take = pageSize;

  return db.category.findMany({ skip, take });
}

import { db } from "@config/db";
import type { Product } from "@prisma/client";
import type { PaginationDto } from "types/dto/pagination";

export async function getAllProducts({ page, pageSize }: PaginationDto): Promise<Product[] | null> {
  const skip = (page - 1) * pageSize;
  const take = pageSize;
  return db.product.findMany({ skip, take });
}

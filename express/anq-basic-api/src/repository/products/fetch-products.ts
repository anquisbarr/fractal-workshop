import { db } from "@config/db";
import type { Product } from "@prisma/client";

export async function getAllProducts(): Promise<Product[] | null> {
  return db.product.findMany();
}

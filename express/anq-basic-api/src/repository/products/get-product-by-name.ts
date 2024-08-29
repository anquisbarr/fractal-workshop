import { db } from "@config/db";
import type { Product } from "@prisma/client";

export async function getProductByName(name: string): Promise<Product | null> {
  return db.product.findFirst({
    where: {
      name,
    },
  });
}

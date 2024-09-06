import type { Greeting } from "@prisma/client";
import { db } from "../../config/db";

export default async function createGreeting({
  data,
}: { data: Greeting }): Promise<Greeting | null> {
  return db.greeting.create({
    data,
  });
}

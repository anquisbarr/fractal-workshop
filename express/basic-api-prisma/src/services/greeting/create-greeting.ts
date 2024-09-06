import type { Greeting } from "@prisma/client";
import createGreetingDb from "../../repository/greeting/create-greeting-db";

export default async function createGreeting({ data }: { data: Greeting }) {
  try {
    const result = await createGreetingDb({ data });
    console.log({ result });
    return result;
  } catch (err) {
    console.log("[GreetingResource][createGreeting] Error: ", err);
    return null;
  }
}

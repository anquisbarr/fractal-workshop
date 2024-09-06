import { DRAFT_GREETING } from "../../db/greetings";
import type { Greeting, WithUuid } from "../../types/common";

export default async function getGreetingUuid({ uuid }: WithUuid): Promise<Greeting | null> {
  const greeting = DRAFT_GREETING.find((greeting) => greeting.uuid === uuid) || null;
  if (greeting === null) {
    throw Error("Greeting not found");
  }
  return greeting;
}

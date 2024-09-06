import type { Request, Response } from "express";
import getGreeting from "../../services/greeting/get-greeting";
import type { WithUser } from "../../types/common";
import { parseUuidFromRequestParams } from "../../utils/parse-from-request";

export default async function controllerGetGreeting(req: WithUser<Request>, res: Response) {
  try {
    const { uuid } = parseUuidFromRequestParams(req);
    const greeting = await getGreeting({ uuid });
    if (!greeting) throw Error("Greeting not found");
    res.send(greeting);
  } catch (err) {
    console.error("[GreetingController][getGreetings] ", err);
    res.sendStatus(500);
  }
}

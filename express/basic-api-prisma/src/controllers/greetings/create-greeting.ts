import type { Request, Response } from "express";
import createGreeting from "../../services/greeting/create-greeting";
import { parseGreetingDataFromRequestBody } from "../../utils/parse-from-request";

export default async function controllerCreateGreeting(req: Request, res: Response) {
  try {
    const data = parseGreetingDataFromRequestBody(req);
    if (!data) throw Error("Data not found");

    const result = await createGreeting({ data });
    return res.send(result);
  } catch (err) {
    console.error("[GreetingController][createGreeting] Error: ", err);
    res.status(500).send("Internal Server Error");
  }
}

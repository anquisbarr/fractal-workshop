import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";
import type { WithUser } from "../../types/common";

export default function extractSchemaBodyRequest(schema: ZodSchema) {
  return (req: WithUser<Request>, res: Response, next: NextFunction) => {
    req.body = req.body || {};
    const { error } = schema.safeParse(req.body);
    if (error) {
      console.error("[Middleware][extractSchemaBodyRequest] Error: ", error);
      res.status(400).send("Invalid request body");
      return;
    }
    next();
  };
}

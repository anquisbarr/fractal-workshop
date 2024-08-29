import { env } from "@config/env";
import type { NextFunction, Request, Response } from "express";
import { jwtVerify } from "jose";

function decodeBase64Secret(base64Secret: string) {
  return Buffer.from(base64Secret, "base64");
}

async function parseToken(authorization: string) {
  try {
    const token = authorization.split(" ")[1];
    const secret = decodeBase64Secret(env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function secureRoute(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const payload = await parseToken(authorization);
  if (!payload) return res.status(401).send({ msg: "Unauthorized" });

  next();
}

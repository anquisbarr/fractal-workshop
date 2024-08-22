import { Router } from "express";
import greetingRouter from "./greeting";

export const V1_ROUTES = Router();

V1_ROUTES.use("/greeting", greetingRouter);

export default V1_ROUTES;

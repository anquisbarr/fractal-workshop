import { Router } from "express";
import categoryRouter from "./category";

export const V1_ROUTER = Router();

V1_ROUTER.use("/category", categoryRouter);

export default V1_ROUTER;

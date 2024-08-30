import { Router } from "express";
import categoryRouter from "./category";
import productRouter from "./product";

export const V1_ROUTER = Router();

V1_ROUTER.use("/category", categoryRouter);
V1_ROUTER.use("/product", productRouter);

export default V1_ROUTER;

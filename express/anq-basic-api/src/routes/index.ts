import { Router } from "express";
import V1_ROUTER from "./v1";

export const router = Router();

router.use("/api/v1", V1_ROUTER);

export default router;

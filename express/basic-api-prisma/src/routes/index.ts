import { Router } from "express";
import { V1_ROUTES } from "./v1";

export const router = Router();

router.use("/api/v1", V1_ROUTES);

export default router;

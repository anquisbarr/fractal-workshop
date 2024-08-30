import fetchProductController from "@controllers/product/fetch-product";
import { secureRoute } from "@middleware/auth/secure-route";
import { Router } from "express";

export const productRouter = Router();
productRouter.use(secureRoute);

productRouter.route("/").get(fetchProductController);

export default productRouter;

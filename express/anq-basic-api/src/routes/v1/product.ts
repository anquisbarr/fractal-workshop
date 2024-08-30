import fetchProductController from "@controllers/product/fetch-product";
import getProductController from "@controllers/product/get-product";
import { secureRoute } from "@middleware/auth/secure-route";
import { Router } from "express";

export const productRouter = Router();
productRouter.use(secureRoute);

productRouter.route("/").get(fetchProductController);
productRouter.route("/:name").get(getProductController);

export default productRouter;

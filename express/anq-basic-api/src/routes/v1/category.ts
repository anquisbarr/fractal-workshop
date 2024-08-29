import fetchCategoryController from "@controllers/category/fetch-category";
import getCategoryController from "@controllers/category/get-category";
import { secureRoute } from "@middleware/auth/secure-route";
import { Router } from "express";

export const categoryRouter = Router();
categoryRouter.use(secureRoute);

categoryRouter.route("/").get(fetchCategoryController);
categoryRouter.route("/:id").get(getCategoryController);

export default categoryRouter;

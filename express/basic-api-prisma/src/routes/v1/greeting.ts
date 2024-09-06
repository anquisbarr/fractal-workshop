import { Router } from "express";
import controllerCreateGreeting from "../../controllers/greetings/create-greeting";
import fetchGreetingsController from "../../controllers/greetings/fetch-greetings";
import getGreetings from "../../controllers/greetings/get-greetings";
import { secureRoute } from "../../middleware/auth/secure-route";
import extractSchemaBodyRequest from "../../middleware/validator/extract-schema-body-request";
import { createGreetingSchema } from "../../types/schema/greeting";

export const greetingRouter = Router();
greetingRouter.use(secureRoute);

greetingRouter.route("/").get(fetchGreetingsController);
greetingRouter
  .route("/")
  .post(extractSchemaBodyRequest(createGreetingSchema), controllerCreateGreeting);
greetingRouter.route("/:uuid").get(getGreetings);

export default greetingRouter;

import { Router } from "express";
import fetchGreetingsController from "../../controllers/greetings/fetch-greetings";
import getGreetings from "../../controllers/greetings/get-greetings";
import { secureRoute } from "../../middleware/auth/secure-route";

export const greetingRouter = Router();
greetingRouter.use(secureRoute);

greetingRouter.route("/").get(fetchGreetingsController);
greetingRouter.route("/:uuid").get(getGreetings);

export default greetingRouter;

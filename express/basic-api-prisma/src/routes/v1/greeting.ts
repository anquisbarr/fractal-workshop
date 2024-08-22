import { Router } from "express";
import { getGreeting } from "../../controllers/greetings/get";
import { secureRoute } from "../../middleware/auth";

export const greetingRouter = Router();
greetingRouter.use(secureRoute);

greetingRouter.route("/").get(getGreeting);

export default greetingRouter;

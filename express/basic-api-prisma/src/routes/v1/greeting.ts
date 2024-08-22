import { Router } from "express";
import { getGreeting } from "../../controllers/greetings/get";

export const greetingRouter = Router();

greetingRouter.route("/").get(getGreeting);

export default greetingRouter;

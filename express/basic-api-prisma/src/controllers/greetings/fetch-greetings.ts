import type { Request, Response } from "express";
import fetchGreetings from "../../services/greeting/fetch-greetings";
import type { WithUser } from "../../types/common";
import {
	parseEmailFromRequest,
	parsePaginationFromQuery,
} from "../../utils/parse-from-request";

export default async function fetchGreetingsController(
	req: WithUser<Request>,
	res: Response,
) {
	try {
		const { page, pageSize } = parsePaginationFromQuery(req);
		const email = parseEmailFromRequest(req);

		console.log({ page, pageSize, email });

		const greetings = await fetchGreetings({ email, page, pageSize });
		console.log({ greetings });

		res.status(200).send(greetings);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Something failed!" });
	}
}

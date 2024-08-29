import fetchGreetingsByEmail from "../../repository/greeting/fetch-greeting-email";
import type { ApiResponse, Greeting } from "../../types/common";
import type { PaginationDto } from "../../types/dto/pagination";

export default async function fetchGreetings({
	email,
	page,
	pageSize,
}: PaginationDto): Promise<ApiResponse<Greeting[]> | null> {
	try {
		const greetings = await fetchGreetingsByEmail({ email, page, pageSize });
		console.log({ greetings });

		if (greetings === null) {
			return null;
		}

		return {
			data: greetings,
			meta: {
				page,
				pageSize,
			},
		};
	} catch (err) {
		console.log(err);
		return {
			data: [],
			meta: {
				page,
				pageSize,
			},
		};
	}
}

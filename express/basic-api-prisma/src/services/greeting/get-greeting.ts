import getGreetingUuid from "../../repository/greeting/get-greeting-uuid";
import type {
	Greeting,
	SingleServiceResponse,
	WithUuid,
} from "../../types/common";

export default async function getGreeting({
	uuid,
}: WithUuid): Promise<SingleServiceResponse<Greeting> | null> {
	try {
		const greeting = await getGreetingUuid({ uuid });
		if (!greeting) return null;

		return {
			data: greeting,
			meta: undefined,
		};
	} catch (err) {
		console.error("[GreetingResource][getGreeting]", err);
		return null;
	}
}

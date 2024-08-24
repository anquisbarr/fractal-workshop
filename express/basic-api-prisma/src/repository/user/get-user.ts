import { db } from "../../config/db";
import type { WithEmail } from "../../types/common";

export function getUserByEmail({ email }: WithEmail) {
	return db.user.findUnique({ where: { email } });
}

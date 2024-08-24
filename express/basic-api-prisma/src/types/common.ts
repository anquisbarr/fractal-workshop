import type { User } from "@prisma/client";

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type WithEmail<T = {}> = { email: string } & T;

//biome-ignore lint/complexity/noBannedTypes: <explanation>
export type WithUser<U = {}> = U & { user?: User };

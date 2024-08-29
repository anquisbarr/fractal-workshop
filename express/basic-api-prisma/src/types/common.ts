import type { User } from "@prisma/client";

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type WithEmail<T = {}> = { email: string } & T;

//biome-ignore lint/complexity/noBannedTypes: <explanation>
export type WithUser<U = {}> = U & { user?: User };

//biome-ignore lint/complexity/noBannedTypes: <explanation>
export type WithUuid<T = {}> = T & { uuid: string };

export type GenericMetadata = {
	page: number;
	pageSize: number;
};

//biome-ignore lint/complexity/noBannedTypes: <explanation>
export type ApiResponse<T = {}, M = GenericMetadata> = {
	data: T;
	meta: M;
};

//biome-ignore lint/complexity/noBannedTypes: <explanation>
export type FetchResponse<T = {}, M = GenericMetadata> = {
	data: T;
	meta: M;
};

//biome-ignore lint/complexity/noBannedTypes: <explanation>
export type GetResponse<T = {}, M = undefined> = {
	data: T;
	meta: M;
};

export type Greeting = { msg: string; email: string; uuid: string };

export type Pagination = {
	page: number;
	pageSize: number;
};

//biome-ignore lint/complexity/noBannedTypes: <explanation>
export type ServiceResponse<T = {}, M = Pagination> = {
	data: T;
	meta: M;
};

export type SingleServiceResponse<T> = ServiceResponse<T, undefined>;

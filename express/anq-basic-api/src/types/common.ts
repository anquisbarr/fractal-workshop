import type { PaginationDto } from "./dto/pagination";

type GenericObject = Record<string, unknown>;

export type GenericMetadata = {
	page: number;
	pageSize: number;
};

export type FetchResponse<T = GenericObject, M = GenericMetadata> = {
	data: T;
	meta: M;
};

export type ServiceResponse<T = GenericObject, M = PaginationDto> = {
	data: T;
	meta: M;
};

export type SingleServiceResponse<T> = ServiceResponse<T, undefined>;

export type WithCategoryName<T = GenericObject> = T & {
	name?: string;
};

export type WithCategoryId<T = GenericObject> = T & {
	id?: number;
};

export type WithProductId<T = GenericObject> = T & {
	id?: number;
};

export type WithProductName<T = GenericObject> = T & {
	name?: string;
};

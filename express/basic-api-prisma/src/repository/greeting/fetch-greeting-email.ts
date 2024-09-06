import { DRAFT_GREETING } from "../../db/greetings";
import type { Greeting } from "../../types/common";
import type { PaginationDto } from "../../types/dto/pagination";

export default function fetchGreetingsByEmail({
  email,
  page,
  pageSize,
}: PaginationDto): Promise<Greeting[] | null> {
  return Promise.resolve(
    DRAFT_GREETING.filter((greeting) => greeting.email === email).slice(
      (page - 1) * pageSize,
      page * pageSize,
    ),
  );
}

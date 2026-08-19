import { verses_numbers_endpoints } from "./verses_numbers_endpoints.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_code_verses_open } from "./app_shared_bible_code_verses_open.mjs";
export function app_shared_bible_read_view_whole_chapter(
  primary_verses,
  chapter_code,
) {
  arguments_assert(arguments, 2);
  let endpoints = verses_numbers_endpoints(primary_verses);
  app_shared_bible_code_verses_open(chapter_code, endpoints);
}

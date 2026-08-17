import { arguments_assert } from "./arguments_assert.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { equal } from "./equal.mjs";
import { app_shared_bible_code_verses_open } from "./app_shared_bible_code_verses_open.mjs";
export function app_shared_bible_read_view_whole_chapter(
  primary_verses,
  chapter_code,
) {
  arguments_assert(arguments, 2);
  let property_name = verse_number_key();
  let verse_numbers = list_map_property(primary_verses, property_name);
  let first = list_first(verse_numbers);
  let last = list_last(verse_numbers);
  let endpoints = equal(first, last) ? [first] : [first, last];
  app_shared_bible_code_verses_open(chapter_code, endpoints);
}

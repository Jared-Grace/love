import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
export function app_shared_bible_read_persist_selection(verse_numbers_chosen) {
  arguments_assert(arguments, 1);
  let v = list_join(verse_numbers_chosen, "-");
  let property_name = app_shared_bible_verse_hash_key();
  html_hash_property_set(property_name, v);
}

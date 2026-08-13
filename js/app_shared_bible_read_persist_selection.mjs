import { app_shared_bible_verses_separator } from "./app_shared_bible_verses_separator.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
export function app_shared_bible_read_persist_selection(verse_numbers_chosen) {
  "Which verses are picked, written into the link, so the picking survives a reload and can be handed to somebody else.";
  "The word that goes between two numbers is asked for rather than spelled, so that this and the reading of it cannot come to disagree about which word it is.";
  arguments_assert(arguments, 1);
  let separator = app_shared_bible_verses_separator();
  let v = list_join(verse_numbers_chosen, separator);
  let property_name = app_shared_bible_verse_hash_key();
  html_hash_property_set(property_name, v);
}

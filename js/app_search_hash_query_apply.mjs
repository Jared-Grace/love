import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_search_query_hash_key } from "./app_search_query_hash_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal_loose } from "./equal_loose.mjs";
import { app_search_query_hash_word_gap } from "./app_search_query_hash_word_gap.mjs";
import { text_replace_to_space } from "./text_replace_to_space.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { equal } from "./equal.mjs";
import { html_value_set } from "./html_value_set.mjs";
export async function app_search_hash_query_apply(input, search) {
  arguments_assert(arguments, 2);
  ("the words the address asks for, put in the box and searched for.");
  ("the box holds what was last searched for, so an address that says the same thing is this page's own writing coming back to it - searching again there would run the very search that wrote it a second time.");
  let hash = html_hash_object_get();
  let key = app_search_query_hash_key();
  let query_hash = property_get_or_null(hash, key);
  let asks_nothing = equal_loose(query_hash, null);
  if (asks_nothing) {
    return;
  }
  let plus = app_search_query_hash_word_gap();
  let query_from_hash = text_replace_to_space(query_hash, plus);
  let query_shown = html_value_get(input);
  let same = equal(query_shown, query_from_hash);
  if (same) {
    return;
  }
  html_value_set(input, query_from_hash);
  await search();
}

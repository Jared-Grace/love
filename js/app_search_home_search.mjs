import { arguments_assert } from "./arguments_assert.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { property_set } from "./property_set.mjs";
import { app_search_query_hash_key } from "./app_search_query_hash_key.mjs";
import { app_search_query_hash_word_gap } from "./app_search_query_hash_word_gap.mjs";
import { text_replace_space_to } from "./text_replace_space_to.mjs";
import { html_hash_object_property_set } from "./html_hash_object_property_set.mjs";
import { app_search_results } from "./app_search_results.mjs";
export async function app_search_home_search(input, context, div_results) {
  arguments_assert(arguments, 3);
  let query = html_value_get(input);
  property_set(context, "query", query);
  let key = app_search_query_hash_key();
  let plus = app_search_query_hash_word_gap();
  let query_hash_written = text_replace_space_to(query, plus);
  html_hash_object_property_set(key, query_hash_written);
  await app_search_results(context, div_results);
}

import { arguments_assert } from "./arguments_assert.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { property_set } from "./property_set.mjs";
import { app_search_query_hash_key } from "./app_search_query_hash_key.mjs";
import { app_search_query_link_written } from "./app_search_query_link_written.mjs";
import { html_hash_object_property_set } from "./html_hash_object_property_set.mjs";
import { app_search_results } from "./app_search_results.mjs";
export async function app_search_home_search(input, context, div_results) {
  arguments_assert(arguments, 3);
  let query = html_value_get(input);
  property_set(context, "query", query);
  let key = app_search_query_hash_key();
  ("What somebody typed is spelled out before it goes into the address, because a comma inside it would otherwise be read at the other end as the end of the value - a shared search for faith, hope and love opened as a search for faith, and said nothing about the three words it dropped.");
  let query_hash_written = app_search_query_link_written(query);
  html_hash_object_property_set(key, query_hash_written);
  await app_search_results(context, div_results);
}

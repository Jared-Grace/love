import { arguments_assert } from "./arguments_assert.mjs";
import { app_search_home_r } from "./app_search_home_r.mjs";
import { property_get } from "./property_get.mjs";
import { app_search_query_hash_key } from "./app_search_query_hash_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function app_search_home_query_hash(context, hash) {
  arguments_assert(arguments, 2);
  let r = app_search_home_r(context, hash);
  let search = property_get(r, "search");
  let input = property_get(r, "input");
  let content = property_get(r, "content");
  let property = app_search_query_hash_key();
  let query_hash = property_get_or_null(hash, property);
  let r2 = {
    search,
    input,
    content,
    query_hash,
  };
  return r2;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_search_home_left } from "./app_search_home_left.mjs";
import { property_get } from "./property_get.mjs";
import { app_search_home_div_results } from "./app_search_home_div_results.mjs";
import { app_search_home_search } from "./app_search_home_search.mjs";
export function app_search_home_r(context, hash) {
  arguments_assert(arguments, 2);
  let r2 = app_search_home_left(context, hash, search);
  let left = property_get(r2, "left");
  let r3 = app_search_home_div_results(r2, left, search);
  let div_results = property_get(r3, "div_results");
  let content = property_get(r3, "content");
  let input = property_get(r3, "input");
  async function search() {
    let r = await app_search_home_search(input, context, div_results);
    return r;
  }
  let r4 = {
    content,
    input,
    search,
  };
  return r4;
}

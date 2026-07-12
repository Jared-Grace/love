import { list_filter_text_match_ordered } from "./list_filter_text_match_ordered.mjs";
import { list_includes } from "./list_includes.mjs";
import { apps_names } from "./apps_names.mjs";
import { text_is_assert } from "./text_is_assert.mjs";
export async function app_shared_name_search_multiple(search) {
  text_is_assert(search);
  let mapped = await apps_names();
  let includes = list_includes(mapped, search);
  let a_names = null;
  if (includes) {
    a_names = [search];
  } else {
    a_names = list_filter_text_match_ordered(mapped, search);
  }
  return a_names;
}

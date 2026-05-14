import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_filter_text_match_ordered } from "../../../love/public/src/list_filter_text_match_ordered.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { apps_names } from "../../../love/public/src/apps_names.mjs";
export async function app_shared_name_search(search) {
  text_is_assert(search);
  let mapped = await apps_names();
  let includes = list_includes(mapped, search);
  let a_names = null;
  if (includes) {
    a_names = [search];
  } else {
    a_names = list_filter_text_match_ordered(mapped, search);
  }
  let a_name = list_single(a_names);
  return a_name;
}

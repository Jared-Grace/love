import { list_find_text_match_ordered } from "../../../love/public/src/list_find_text_match_ordered.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { apps_names } from "../../../love/public/src/apps_names.mjs";
export async function app_shared_name_search(search) {
  let mapped = await apps_names();
  let includes = list_includes(mapped, search);
  let a_name = null;
  if (includes) {
    a_name = search;
  } else {
    a_name = list_find_text_match_ordered(mapped, search);
  }
  return a_name;
}

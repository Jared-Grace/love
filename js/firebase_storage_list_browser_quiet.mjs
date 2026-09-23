import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_list_url } from "./firebase_storage_list_url.mjs";
import { http_json_browser_quiet } from "./http_json_browser_quiet.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function firebase_storage_list_browser_quiet(prefix) {
  "$plain prefix";
  "Every name this project's bucket holds under a prefix, asked from a browser with nothing drawn over the page. The prefix ends in a slash - the store refuses one that does not.";
  arguments_assert(arguments, 1);
  let project_url = firebase_storage_url_project_jg();
  let names = [];
  let page_token = null;
  let more = true;
  while (more) {
    let url = firebase_storage_list_url(project_url, prefix, page_token);
    let answer = await http_json_browser_quiet(url);
    let items = property_get_or(answer, "items", []);
    let items2 = list_map_property(items, "name");
    list_add_multiple(names, items2);
    page_token = property_get_or_null(answer, "nextPageToken");
    more = null_not_is(page_token);
  }
  return names;
}

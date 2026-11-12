import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_renames } from "./app_shared_renames.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_renames_current } from "./app_shared_renames_current.mjs";
import { app_shared_route } from "./app_shared_route.mjs";
import { list_map } from "./list_map.mjs";
import { firebase_json_path } from "./firebase_json_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_in_list_not } from "./property_in_list_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { app_shared_renames_page_ready } from "./app_shared_renames_page_ready.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_concat } from "./list_concat.mjs";
import { property_set } from "./property_set.mjs";
import { json_format_to_spaces } from "./json_format_to_spaces.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function app_shared_renames_redirects_unready_write() {
  arguments_assert(arguments, 0);
  ("The other half of the rename redirects: while a renamed app's new page is not served yet, its NEW address is sent back to the OLD page, which is still there to read. Without it the front page links to the new name the moment the rename lands, and every visitor who follows the link is told there is no such page until somebody promotes the app - measured 2026-11-12, /learn_js was not found on both sites while /code still worked.");
  ("The redirect is temporary, a 302, because it is meant to disappear: a browser remembers a lasting one and would go on sending people to the old page after the new one arrives.");
  ("Every rule whose source is a renamed app's address today is taken out before any is written, so the moment the new page is served this writes none and the rule is gone. That matters more than tidiness: a site follows a redirect before it looks for a file, so a rule left behind would send the new address to the old one, which is sent straight back - a loop.");
  ("An app whose old page is not in the served folder either gets nothing, since there is nowhere to send anybody.");
  let renames = await app_shared_renames();
  function current_route(rename) {
    let before = property_get(rename, "before");
    let current = app_shared_renames_current(renames, before);
    let route = app_shared_route(current);
    return route;
  }
  let sources = list_map(renames, current_route);
  let path = firebase_json_path();
  let config = await file_read_json(path);
  let hosting = property_get(config, "hosting");
  let redirects = property_get(hosting, "redirects");
  function other_is(redirect) {
    let n = property_in_list_not(redirect, "source", sources);
    return n;
  }
  let others = list_filter(redirects, other_is);
  let made = [];
  let made_sources = [];
  let to_folder = folder_public_absolute();
  for (let rename of renames) {
    let before = property_get(rename, "before");
    let ready = await app_shared_renames_page_ready(renames, before);
    if (ready) {
      continue;
    }
    let present = await folder_app_file_names(to_folder, before);
    if (list_empty_is(present)) {
      continue;
    }
    let source = current_route(rename);
    if (list_includes(made_sources, source)) {
      continue;
    }
    list_add(made_sources, source);
    let destination = app_shared_route(before);
    list_add(made, {
      source,
      destination,
      type: 302,
    });
  }
  let all = list_concat(others, made);
  property_set(hosting, "redirects", all);
  let json = json_format_to_spaces(config, 2);
  await file_overwrite(path, json + "\n");
  return made;
}

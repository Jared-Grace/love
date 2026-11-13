import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_index_main_fns } from "./app_index_main_fns.mjs";
import { firebase_json_path } from "./firebase_json_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { property_exists } from "./property_exists.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { app_shared_route } from "./app_shared_route.mjs";
import { list_includes } from "./list_includes.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
export async function app_index_cards_unserved() {
  arguments_assert(arguments, 0);
  ("Every app the front page offers a card for that has nothing standing at its address in the folder that goes live - no page, and no rule sending the address somewhere else. A visitor tapping one of these cards is told there is no such page.");
  ("Read from the folder and the rules file rather than from the live sites, so it needs no internet and answers about the commit: the same question asked of the live sites is a real browser per app, slow enough that it is only ever run by hand, and it was not run while /learn_js stood missing on both sites from 2026-11-08 to 2026-11-12.");
  ("A redirect counts as served because it is: following it lands on a page. That is the state a renamed app is in until its new page is promoted.");
  ("Cards leading off the site, or opening something over the front page, have no address here and are left out.");
  function about_opened() {}
  let entries = app_index_main_fns(about_opened);
  let path = firebase_json_path();
  let config = await file_read_json(path);
  let hosting = property_get(config, "hosting");
  let redirects = property_get(hosting, "redirects");
  let sources = list_map_property(redirects, "source");
  let folder = folder_public_absolute();
  let unserved = [];
  for (let entry of entries) {
    let app_is = property_exists(entry, "app_fn");
    if (not(app_is)) {
      continue;
    }
    let app_fn = property_get(entry, "app_fn");
    let a_name = app_shared_name_prefix_without(app_fn);
    let route = app_shared_route(a_name);
    if (list_includes(sources, route)) {
      continue;
    }
    let file_name = file_name_html(a_name);
    let page = path_join([folder, file_name]);
    let present = await file_exists(page);
    if (present) {
      continue;
    }
    list_add(unserved, a_name);
  }
  return unserved;
}

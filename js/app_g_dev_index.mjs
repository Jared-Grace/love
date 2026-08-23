import { app_g_storage_app } from "./app_g_storage_app.mjs";
import { app_shared_dev_overlay } from "./app_shared_dev_overlay.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_g_dev_routes } from "./app_g_dev_routes.mjs";
import { app_g_dev_index_prefixes_all } from "./app_g_dev_index_prefixes_all.mjs";
import { app_shared_hash_index_render } from "./app_shared_hash_index_render.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_g_dev_index() {
  let f_name2 = fn_name("app_shared_hash_index_render");
  (text_combine_multiple([
    "the #index dev directory: WHICH routes this game has, WHERE each is filed, and whose session storage remembers the drilled-open path - handed to ",
    f_name2,
    ", which is the drill-down of cards itself and belongs to no app. routes + categories come from the ",
  ]),
    fn_name("app_g_dev_routes"),
    " registry + ",
    fn_name("app_g_dev_index_prefixes_all"),
    ", so it never drifts");
  ("reset and index are added to the routes the registry names because both are screens you can ask for by address and neither is registered as one: reset acts and index is this page. A directory missing the way back to itself is the one card a reader looks for.");
  let div = app_shared_dev_overlay("Dev routes");
  let routes = app_g_dev_routes(null);
  let names = properties_get(routes);
  let all = list_concat(names, ["reset", "index"]);
  let prefixes = app_g_dev_index_prefixes_all(all);
  let app_fn = app_g_storage_app();
  app_shared_hash_index_render(div, all, prefixes, app_fn);
}

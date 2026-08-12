import { app_g_dev_index_render_node } from "./app_g_dev_index_render_node.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { app_g_storage_app } from "./app_g_storage_app.mjs";
import { app_g_dev_index_open_key } from "./app_g_dev_index_open_key.mjs";
import { storage_session_get } from "./storage_session_get.mjs";
import { app_g_dev_overlay } from "./app_g_dev_overlay.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_g_dev_routes } from "./app_g_dev_routes.mjs";
import { app_g_dev_index_prefixes_all } from "./app_g_dev_index_prefixes_all.mjs";
import { app_g_dev_index_tree } from "./app_g_dev_index_tree.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_g_dev_index() {
  let f_name = fn_name("app_search_results");
  let f_name2 = fn_name("app_shared_container_blue");
  (text_combine_multiple([
    "the #index dev directory, rendered like the Bible SEARCH RESULTS (DRY — the SAME ",
    f_name2,
    " cards + bold collapsible header the search uses, mirroring ",
    f_name,
    ".book_card_add): a drill-down where a category card 'a ›' toggles a nested body of its child cards, and drilling a: b: reaches leaf ROUTE cards whose link jumps to that screen. routes + categories come from the ",
  ]),
    fn_name("app_g_dev_routes"),
    " registry + ",
    fn_name("app_g_dev_index_prefixes_all"),
    ", so it never drifts. BESPOKE (recursion / closures / Object.keys) — do NOT auto-canonicalize");
  let div = app_g_dev_overlay("Dev routes");
  let routes = app_g_dev_routes(null);
  let names = properties_get(routes);
  let all = list_concat(names, ["reset", "index"]);
  let prefixes = app_g_dev_index_prefixes_all(all);
  let tree = app_g_dev_index_tree(all, prefixes);
  let open_key = app_g_dev_index_open_key();
  let app_fn = app_g_storage_app();
  let open_stored = storage_session_get(app_fn, open_key);
  let open_paths = new Set(open_stored);
  let top = object_property_names(tree.children).sort();
  for (let label of top) {
    app_g_dev_index_render_node(
      div,
      label,
      label,
      tree.children[label],
      open_paths,
    );
  }
}

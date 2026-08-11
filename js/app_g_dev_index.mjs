import { app_g_dev_index_open_persist } from "./app_g_dev_index_open_persist.mjs";
import { app_g_dev_index_leaf_card } from "./app_g_dev_index_leaf_card.mjs";
import { app_g_dev_index_index_card } from "./app_g_dev_index_index_card.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { json_from } from "./json_from.mjs";
import { app_g_dev_overlay } from "./app_g_dev_overlay.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { app_g_dev_routes } from "./app_g_dev_routes.mjs";
import { app_g_dev_index_prefixes } from "./app_g_dev_index_prefixes.mjs";
import { app_g_dev_index_tree } from "./app_g_dev_index_tree.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
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
    fn_name("app_g_dev_index_prefixes"),
    ", so it never drifts. BESPOKE (recursion / closures / Object.keys) — do NOT auto-canonicalize");
  let div = app_g_dev_overlay("Dev routes");
  let routes = app_g_dev_routes(null);
  let names = properties_get(routes);
  let all = list_concat(names, ["reset", "index"]);
  let prefixes = app_g_dev_index_prefixes();
  let tree = app_g_dev_index_tree(all, prefixes);
  let open_key = "g_dev_index_open";
  let open_paths = new Set();
  let open_stored = sessionStorage.getItem(open_key);
  if (open_stored) {
    let v = json_from(open_stored);
    open_paths = new Set(v);
  }
  function render_node(parent, path, label, node) {
    let child_labels = object_property_names(node.children).sort();
    if (equal(child_labels.length, 0)) {
      app_g_dev_index_leaf_card(parent, label, node.hash);
      return;
    }
    let card = app_g_dev_index_index_card(parent);
    let header = html_div_text_bold(card, label + " ›");
    html_cursor_pointer(header);
    let body = html_div(card);
    let open = {
      on: open_paths.has(path),
    };
    if (open.on) {
      html_display_block(body);
    } else {
      html_display_none(body);
    }
    function toggle() {
      open.on = not(open.on);
      if (open.on) {
        html_display_block(body);
        open_paths.add(path);
      } else {
        html_display_none(body);
        open_paths.delete(path);
      }
      app_g_dev_index_open_persist(open_paths, sessionStorage, open_key);
    }
    html_on_click(header, toggle);
    if (node.hash) {
      app_g_dev_index_leaf_card(body, "→ " + label, node.hash);
    }
    for (let cl of child_labels) {
      render_node(body, path + "/" + cl, cl, node.children[cl]);
    }
  }
  let top = object_property_names(tree.children).sort();
  for (let label of top) {
    render_node(div, label, label, tree.children[label]);
  }
}

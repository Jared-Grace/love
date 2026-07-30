import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { app_g_dev_overlay } from "./app_g_dev_overlay.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_g_dev_routes } from "./app_g_dev_routes.mjs";
import { app_g_dev_index_prefixes } from "./app_g_dev_index_prefixes.mjs";
import { app_g_dev_index_tree } from "./app_g_dev_index_tree.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function app_g_dev_index() {
  let f_name = fn_name("app_search_results");
  (text_combine_multiple([
    "the #index dev directory, rendered like the Bible SEARCH RESULTS (DRY — the SAME ",
    app_shared_container_blue.name,
    " cards + bold collapsible header the search uses, mirroring ",
    f_name,
    ".book_card_add): a drill-down where a category card 'a ›' toggles a nested body of its child cards, and drilling a: b: reaches leaf ROUTE cards whose link (click + reload-on-hash-change) jumps to that screen. routes + categories come from the ",
  ]),
    app_g_dev_routes.name,
    " registry + ",
    app_g_dev_index_prefixes.name,
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
    let v = JSON.parse(open_stored);
    open_paths = new Set(v);
  }
  function open_persist() {
    "remember which category nodes are expanded ACROSS the reload that opening a route triggers: the open set lives in sessionStorage (per tab, survives the hash-change reload, gone on tab close — dev-only state), so coming BACK to #index from a game screen restores the same drilled-open path instead of collapsing everything.";
    let v2 = JSON.stringify([...open_paths]);
    sessionStorage.setItem(open_key, v2);
  }
  function index_card(parent) {
    "a search-style blue card, but with the shared 10px margin-y overridden to a TIGHTER 0.15rem so the #index choices sit close together (the search results want the room; a dev directory does not)";
    let card = app_shared_container_blue(parent);
    html_style_margin_y(card, "0.15rem");
    return card;
  }
  function leaf_card(parent, label, hash) {
    let card = index_card(parent);
    let href = "#" + hash;
    let link = html_a_href_text(card, href, label);
    ("the address stays on the anchor so the card can still be copied or opened in a new tab, but the going-there is done by hand: a bare href only changes the hash and waits for a listener to reload, and that listener is registered while the app starts up, so a start-up that fails takes every card on this page with it");
    function go() {
      html_hash_name_reload(hash);
    }
    html_on_click(link, go);
    html_display_block(link);
    html_style_assign(link, {
      color: "inherit",
      "text-decoration": "none",
    });
    return card;
  }
  function render_node(parent, path, label, node) {
    let child_labels = Object.keys(node.children).sort();
    if (equal(child_labels.length, 0)) {
      leaf_card(parent, label, node.hash);
      return;
    }
    let card = index_card(parent);
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
      open_persist();
    }
    html_on_click(header, toggle);
    if (node.hash) {
      leaf_card(body, "→ " + label, node.hash);
    }
    for (let cl of child_labels) {
      render_node(body, path + "/" + cl, cl, node.children[cl]);
    }
  }
  let top = Object.keys(tree.children).sort();
  for (let label of top) {
    render_node(div, label, label, tree.children[label]);
  }
}

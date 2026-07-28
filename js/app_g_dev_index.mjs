import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_search_results } from "./app_search_results.mjs";
import { app_shared_color_page_background } from "./app_shared_color_page_background.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_div } from "./html_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
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
  (text_combine_multiple([
    "the #index dev directory, rendered like the Bible SEARCH RESULTS (DRY — the SAME ",
    app_shared_container_blue.name,
    " cards + bold collapsible header the search uses, mirroring ",
    app_search_results.name,
    ".book_card_add): a drill-down where a category card 'a ›' toggles a nested body of its child cards, and drilling a: b: reaches leaf ROUTE cards whose link (click + reload-on-hash-change) jumps to that screen. routes + categories come from the ",
  ]),
    app_g_dev_routes.name,
    " registry + ",
    app_g_dev_index_prefixes.name,
    ", so it never drifts. BESPOKE (recursion / closures / Object.keys) — do NOT auto-canonicalize");
  let div = html_body_div();
  html_style_assign(div, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: app_shared_color_page_background(),
    color: "black",
    display: "flex",
    "flex-direction": "column",
    "align-items": "stretch",
    "justify-content": "flex-start",
    gap: "0",
    "z-index": "1000",
    padding: "1rem",
    "box-sizing": "border-box",
    "overflow-y": "auto",
  });
  let title = html_p_text(div, "Dev routes");
  html_style_assign(title, {
    margin: "0",
    "font-weight": "bold",
  });
  let routes = app_g_dev_routes(null);
  let names = properties_get(routes);
  let all = list_concat(names, ["reset", "index"]);
  let prefixes = app_g_dev_index_prefixes();
  let tree = app_g_dev_index_tree(all, prefixes);
  function leaf_card(parent, label, hash) {
    let card = app_shared_container_blue(parent);
    let href = "#" + hash;
    let link = html_a_href_text(card, href, label);
    html_display_block(link);
    html_style_assign(link, {
      color: "inherit",
      "text-decoration": "none",
    });
    return card;
  }
  function render_node(parent, label, node) {
    let child_labels = Object.keys(node.children).sort();
    if (equal(child_labels.length, 0)) {
      leaf_card(parent, label, node.hash);
      return;
    }
    let card = app_shared_container_blue(parent);
    let header = html_div_text_bold(card, label + " ›");
    html_cursor_pointer(header);
    let body = html_div(card);
    html_display_none(body);
    let open = {
      on: false,
    };
    function toggle() {
      open.on = not(open.on);
      if (open.on) {
        html_display_block(body);
      } else {
        html_display_none(body);
      }
    }
    html_on_click(header, toggle);
    if (node.hash) {
      leaf_card(body, "→ " + label, node.hash);
    }
    for (let cl of child_labels) {
      render_node(body, cl, node.children[cl]);
    }
  }
  let top = Object.keys(tree.children).sort();
  for (let label of top) {
    render_node(div, label, tree.children[label]);
  }
}

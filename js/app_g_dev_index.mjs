import { app_g } from "./app_g.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_div } from "./html_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_display_set } from "./html_display_set.mjs";
import { html_card } from "./html_card.mjs";
import { html_on } from "./html_on.mjs";
import { app_g_dev_routes } from "./app_g_dev_routes.mjs";
import { app_g_dev_index_prefixes } from "./app_g_dev_index_prefixes.mjs";
import { app_g_dev_index_tree } from "./app_g_dev_index_tree.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function app_g_dev_index() {
  ("the #index dev directory, rendered like a search app's RESULTS: a drill-down of tappable CARDS (shared html_card look) built from the ",
    app_g_dev_routes.name,
    " registry + its category prefixes (",
    app_g_dev_index_prefixes.name,
    "). a category CARD 'a ›' reveals a nested container of its child cards; drilling a: b: reaches leaf ROUTE cards, each a link that (click + reload-on-hash-change) jumps to that screen. BESPOKE (recursion / closures / Object.keys) — do NOT auto-canonicalize");
  let div = html_body_div();
  html_style_assign(div, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "#eef0f3",
    color: "black",
    display: "flex",
    "flex-direction": "column",
    "align-items": "stretch",
    "justify-content": "flex-start",
    gap: "0.6rem",
    "z-index": "1000",
    "font-size": "1.2rem",
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
    let href = "#" + hash;
    let link = html_a_href_text(parent, href, label);
    html_card(link);
    html_style_assign(link, {
      background: "white",
      color: "black",
      "text-decoration": "none",
      display: "block",
    });
    return link;
  }
  function render_node(parent, label, node) {
    let child_labels = Object.keys(node.children).sort();
    if (equal(child_labels.length, 0)) {
      leaf_card(parent, label, node.hash);
      return;
    }
    let card = html_span_text(parent, label + " ›");
    html_card(card);
    html_style_assign(card, {
      background: "white",
      "font-weight": "bold",
      cursor: "pointer",
      display: "block",
    });
    let sub = html_div(parent);
    html_style_assign(sub, {
      display: "none",
      "flex-direction": "column",
      "padding-left": "1rem",
      gap: "0.6rem",
    });
    let open = {
      on: false,
    };
    function toggle() {
      open.on = not(open.on);
      let show = open.on ? "flex" : "none";
      html_display_set(sub, show);
    }
    html_on(card, "click", toggle);
    if (node.hash) {
      leaf_card(sub, "→ " + label, node.hash);
    }
    for (let cl of child_labels) {
      render_node(sub, cl, node.children[cl]);
    }
  }
  let top = Object.keys(tree.children).sort();
  for (let label of top) {
    render_node(div, label, tree.children[label]);
  }
}

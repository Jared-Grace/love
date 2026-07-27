import { app_g } from "./app_g.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_div } from "./html_div.mjs";
import { html_button } from "./html_button.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_g_dev_routes } from "./app_g_dev_routes.mjs";
import { app_g_dev_index_prefixes } from "./app_g_dev_index_prefixes.mjs";
import { app_g_dev_index_tree } from "./app_g_dev_index_tree.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_g_dev_index() {
  ("the #index dev directory, rendered like a search app's RESULTS: a drill-down category TREE built from the ",
    app_g_dev_routes.name,
    " registry (so it never drifts) + its category prefixes (",
    app_g_dev_index_prefixes.name,
    "). a category 'a' is a BUTTON that reveals its children; drilling a: b: reaches the leaf routes, each a link that (click + reload-on-hash-change) jumps to that screen. BESPOKE (recursion / closures / Object.keys) — do NOT auto-canonicalize");
  let div = html_body_div();
  html_style_assign(div, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "white",
    color: "black",
    display: "flex",
    "flex-direction": "column",
    "align-items": "stretch",
    "justify-content": "flex-start",
    gap: "0.5rem",
    "z-index": "1000",
    "font-size": "1.3rem",
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
  function render_node(parent, label, node) {
    let child_labels = Object.keys(node.children).sort();
    if (child_labels.length === 0) {
      let leaf_href = "#" + node.hash;
      html_a_href_text(parent, leaf_href, label);
      return;
    }
    let button = html_button(parent, label + " ›", toggle);
    html_style_assign(button, {
      "text-align": "left",
      "font-size": "1.3rem",
      padding: "0.4rem 0.6rem",
      border: "none",
      background: "#eee",
      "border-radius": "0.4rem",
      cursor: "pointer",
    });
    let sub = html_div(parent);
    html_style_assign(sub, {
      display: "none",
      "flex-direction": "column",
      "padding-left": "1.2rem",
      gap: "0.5rem",
    });
    let open = {
      on: false,
    };
    function toggle() {
      open.on = !open.on;
      let show = open.on ? "flex" : "none";
      html_style_set(sub, "display", show);
    }
    if (node.hash) {
      let self_href = "#" + node.hash;
      html_a_href_text(sub, self_href, "→ " + label);
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

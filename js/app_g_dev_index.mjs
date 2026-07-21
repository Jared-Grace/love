import { app_g } from "./app_g.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_div } from "./html_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_dev_routes } from "./app_g_dev_routes.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { list_sort_text_mapper } from "./list_sort_text_mapper.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine } from "./text_combine.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
export function app_g_dev_index() {
  ("the #index dev directory: a plain full-screen list of every ",
    app_g.name,
    " dev route as a clickable link (from the ",
    app_g_dev_routes.name,
    " registry, so it never drifts). light background so the default link color reads; a click + reload-on-hash-change jumps to that screen");
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
    "align-items": "center",
    "justify-content": "center",
    gap: "0.75rem",
    "z-index": "1000",
    "font-size": "1.5rem",
  });
  let title = html_p_text(div, "Dev routes");
  html_style_assign(title, {
    margin: "0",
    "font-weight": "bold",
  });
  let routes = app_g_dev_routes();
  let names = properties_get(routes);
  let all = list_concat(names, ["reset", "index"]);
  let conversation_prefix = "conversation: ";
  let unbeliever_prefix = "conversation: unbeliever: ";
  let prefixes = {
    unbeliever: conversation_prefix,
    gospel_share: unbeliever_prefix,
    hru: unbeliever_prefix,
    believe: unbeliever_prefix,
    pray: unbeliever_prefix,
  };
  function entry(name) {
    let prefix = "";
    if (property_exists(prefixes, name)) {
      prefix = property_get(prefixes, name);
    }
    let e = {
      hash: name,
      prefix,
    };
    return e;
  }
  let entries = list_map(all, entry);
  function sort_key(e) {
    let left2 = property_get(e, "prefix");
    let right = property_get(e, "hash");
    let key = text_combine(left2, right);
    return key;
  }
  list_sort_text_mapper(entries, sort_key);
  function render_row(e) {
    let row = html_div(div);
    let text = property_get(e, "prefix");
    html_span_text(row, text);
    let name = property_get(e, "hash");
    let href = text_combine("#", name);
    html_a_href_text(row, href, href);
  }
  each(entries, render_row);
}

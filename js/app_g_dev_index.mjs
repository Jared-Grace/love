import { html_document_body } from "./html_document_body.mjs";
import { html_div } from "./html_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_dev_routes } from "./app_g_dev_routes.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { html_hash_links } from "./html_hash_links.mjs";
export function app_g_dev_index() {
  "the #index dev directory: a plain full-screen list of every app_g dev route as a clickable link (from the app_g_dev_routes registry, so it never drifts). light background so the default link color reads; a click + reload-on-hash-change jumps to that screen";
  let body = html_document_body();
  let div = html_div(body);
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
  html_hash_links(div, all);
}

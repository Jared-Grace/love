import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_dev_back_link() {
  "a small fixed '← routes' pill (dev only) linking back to the #index directory, floated above everything so you can jump between test screens from any dev route without editing the URL. the address stays on the anchor so it can be copied, but the going-there is done by hand rather than left to a hash listener that a failed start-up would have removed";
  let body = html_document_body();
  let a = html_a_href_text(body, "#index", "← routes");
  function go() {
    html_hash_name_reload("index");
  }
  html_on_click(a, go);
  html_style_assign(a, {
    position: "fixed",
    top: "0.5rem",
    left: "0.5rem",
    "z-index": "2000",
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "0.3rem 0.6rem",
    "border-radius": "0.4rem",
    "font-size": "1rem",
    "text-decoration": "none",
  });
}

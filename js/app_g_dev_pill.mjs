import { html_document_body } from "./html_document_body.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_dev_pill(text, href, on_click, left) {
  "one small dark pill floated over everything at the top of the screen, dev only - the shape every jump-somewhere link in the dev screens wears";
  "the address stays on the anchor so it can be copied, and the going-there is done by the handler rather than left to a hash listener, because a start-up that failed is exactly when you want the link and exactly when no listener was registered";
  "where it sits along the top is handed in, so two of them stand side by side rather than on top of each other";
  let body = html_document_body();
  let a = html_a_href_text(body, href, text);
  html_on_click(a, on_click);
  html_style_assign(a, {
    position: "fixed",
    top: "0.5rem",
    left: left,
    "z-index": "2000",
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "0.3rem 0.6rem",
    "border-radius": "0.4rem",
    "font-size": "1rem",
    "text-decoration": "none",
  });
}

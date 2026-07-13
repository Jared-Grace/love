import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function html_loading_overlay() {
  let body = html_document_body();
  let div = html_div(body);
  let s = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "z-index": "1000",
    opacity: "0",
    transition: "opacity 0.15s ease",
  };
  html_style_assign(div, s);
  let message = html_p_text(div, "One moment, please 🙏");
  html_style_assign(message, {
    color: "white",
    "font-size": "1.5rem",
    "font-family": "sans-serif",
    "text-align": "center",
  });
  html_reflow_force(div);
  html_style_set(div, "opacity", "1");
  return div;
}

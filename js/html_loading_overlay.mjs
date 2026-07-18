import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_loading_spinner } from "./html_loading_spinner.mjs";
export function html_loading_overlay() {
  let body = html_document_body();
  let div = html_div(body);
  let s = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    gap: "1.5rem",
    "z-index": "1000",
    opacity: "0",
    transition: "opacity 0.15s ease",
  };
  html_style_assign(div, s);
  let card = html_div(div);
  html_style_assign(card, {
    background: "rgba(0, 0, 0, 0.55)",
    "border-radius": "5rem",
    padding: "2.25rem 2.75rem",
    "max-width": "88vw",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    gap: "1.5rem",
    "box-shadow": "0 0 2.5rem 1.75rem rgba(0, 0, 0, 0.55)",
  });
  html_loading_spinner(card);
  let message = html_p_text(card, "One moment, please 🙏");
  html_style_assign(message, {
    color: "white",
    "font-size": "1.5rem",
    "font-family": "sans-serif",
    "text-align": "center",
    "text-shadow": "0 1px 3px rgba(0, 0, 0, 0.8)",
  });
  html_reflow_force(div);
  html_style_set(div, "opacity", "1");
  return div;
}

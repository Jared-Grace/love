import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_loading_spinner_style } from "./html_loading_spinner_style.mjs";
export function html_loading_spinner(parent) {
  html_loading_spinner_style();
  let spinner = html_div(parent);
  html_style_assign(spinner, {
    width: "6rem",
    height: "6rem",
    border: "0.5rem solid rgba(255, 213, 74, 0.2)",
    "border-top-color": "#ffd54a",
    "border-radius": "50%",
    "box-shadow": "0 0 1rem rgba(255, 213, 74, 0.6)",
    animation:
      "html_loading_spin 2s ease-in-out infinite, html_loading_glow 2s ease-in-out infinite",
  });
  return spinner;
}

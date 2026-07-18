import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_loading_spinner_style } from "./html_loading_spinner_style.mjs";
export function html_loading_spinner(parent) {
  html_loading_spinner_style();
  let spinner = html_div(parent);
  html_style_assign(spinner, {
    width: "96px",
    height: "96px",
    border: "9px solid rgba(255, 255, 255, 0.25)",
    "border-top-color": "white",
    "border-radius": "50%",
    animation: "html_loading_spin 1.2s ease-in-out infinite",
  });
  return spinner;
}

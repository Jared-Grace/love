import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_loading_spinner_style } from "./html_loading_spinner_style.mjs";
export function html_loading_spinner(parent) {
  html_loading_spinner_style();
  let spinner = html_div(parent);
  html_style_assign(spinner, {
    position: "relative",
    width: "6rem",
    height: "6rem",
  });
  let outer = html_div(spinner);
  html_style_assign(outer, {
    position: "absolute",
    inset: "0",
    border: "0.5rem solid rgba(255, 248, 232, 0.2)",
    "border-top-color": "#fff8e8",
    "border-radius": "50%",
    "box-shadow": "0 0 1rem rgba(255, 248, 232, 0.6)",
    animation:
      "html_loading_spin 2s ease-in-out infinite, html_loading_glow 2s ease-in-out infinite",
  });
  let inner = html_div(spinner);
  html_style_assign(inner, {
    position: "absolute",
    inset: "1.25rem",
    border: "0.3rem solid rgba(255, 248, 232, 0.15)",
    "border-bottom-color": "#fff8e8",
    "border-radius": "50%",
    animation: "html_loading_spin_reverse 1.4s linear infinite",
  });
  let core = html_div(spinner);
  html_style_assign(core, {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "1.4rem",
    height: "1.4rem",
    transform: "translate(-50%, -50%)",
    "border-radius": "50%",
    background: "radial-gradient(circle, #ffd54a 0%, #ffb300 70%)",
    "box-shadow": "0 0 1rem rgba(255, 213, 74, 0.9)",
    animation: "html_loading_core 2s ease-in-out infinite",
  });
  return spinner;
}

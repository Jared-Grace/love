import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_loading_spinner_style } from "./html_loading_spinner_style.mjs";
export function html_loading_spinner(parent) {
  html_loading_spinner_style();
  let spinner = html_div(parent);
  html_style_assign(spinner, {
    position: "relative",
    width: "12rem",
    height: "12rem",
  });
  let outer = html_div(spinner);
  html_style_assign(outer, {
    position: "absolute",
    inset: "0",
    border: "0.75rem solid rgba(140, 180, 255, 0.2)",
    "border-top-color": "#bcd6ff",
    "border-radius": "50%",
    "box-shadow": "0 0 1rem rgba(140, 180, 255, 0.6)",
    animation:
      "html_loading_spin 2s ease-in-out infinite, html_loading_glow 2s ease-in-out infinite",
  });
  let inner = html_div(spinner);
  html_style_assign(inner, {
    position: "absolute",
    inset: "3rem",
    border: "0.45rem solid rgba(140, 180, 255, 0.15)",
    "border-bottom-color": "#bcd6ff",
    "border-radius": "50%",
    animation: "html_loading_spin_reverse 1.4s linear infinite",
  });
  let core = html_div(spinner);
  html_style_assign(core, {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "2.1rem",
    height: "2.1rem",
    transform: "translate(-50%, -50%)",
    "border-radius": "50%",
    background: "radial-gradient(circle, #bcd6ff 0%, #4a90e2 70%)",
    "box-shadow": "0 0 1rem rgba(140, 180, 255, 0.9)",
    animation: "html_loading_core 2s ease-in-out infinite",
  });
  return spinner;
}

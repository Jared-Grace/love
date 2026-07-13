import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_style_control_inline(component) {
  html_style_assign(component, {
    "border-radius": "0.8em",
    padding: "0.3em",
    display: "inline-block",
    "border-width": "0px",
    margin: "0.15em",
  });
}

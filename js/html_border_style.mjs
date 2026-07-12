import { html_style_assign } from "./html_style_assign.mjs";
export function html_border_style(component, border_style) {
  html_style_assign(component, {
    "border-style": border_style,
  });
}

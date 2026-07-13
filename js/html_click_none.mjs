import { html_style_set } from "./html_style_set.mjs";
export function html_click_none(ci) {
  html_style_set(ci, "pointerEvents", "none");
}

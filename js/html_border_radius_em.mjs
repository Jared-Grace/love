import { html_border_radius } from "./html_border_radius.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_border_radius_em(component, border_radius) {
  let border_radius_em = text_combine(border_radius, "em");
  html_border_radius(component, border_radius_em);
}

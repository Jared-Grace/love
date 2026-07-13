import { html_border_radius } from "./html_border_radius.mjs";
import { html_style_padding_em } from "./html_style_padding_em.mjs";
export function html_card(component) {
  html_border_radius(component, "1.2em");
  html_style_padding_em(component, "0.6");
}

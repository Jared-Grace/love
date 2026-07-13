import { html_border_radius } from "./html_border_radius.mjs";
import { html_style_padding_em } from "./html_style_padding_em.mjs";
import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
export function html_card(component) {
  html_border_radius(component, "1.2em");
  html_style_padding_em(component, "0.6");
  html_box_shadow_set(component, "0 2px 6px rgba(0, 0, 0, 0.12)");
}

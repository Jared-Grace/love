import { html_border_radius } from "./html_border_radius.mjs";
import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
import { html_style_padding_em } from "./html_style_padding_em.mjs";
export function html_card(component) {
  html_border_radius(component, "0.5em");
  html_box_shadow_set(component, "0 0.15em 0.4em #00000033");
  html_style_padding_em(component, "0.5");
}

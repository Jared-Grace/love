import { html_style_padding } from "../../../love/public/src/html_style_padding.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { html_margin_em } from "../../../love/public/src/html_margin_em.mjs";
import { html_border_radius_em } from "../../../love/public/src/html_border_radius_em.mjs";
export function app_replace_button_symbol_style(b) {
  html_border_radius_em(b, 0.5);
  html_margin_em(b, 0.09);
  html_style_set(b, "border", 0);
  html_style_padding(b, "0.3em");
}

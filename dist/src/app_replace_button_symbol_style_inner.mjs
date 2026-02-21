import { html_style_padding_y } from "../../../love/public/src/html_style_padding_y.mjs";
import { html_style_padding_x } from "../../../love/public/src/html_style_padding_x.mjs";
import { html_border_none } from "../../../love/public/src/html_border_none.mjs";
import { html_margin_em } from "../../../love/public/src/html_margin_em.mjs";
import { html_border_radius_em } from "../../../love/public/src/html_border_radius_em.mjs";
export function app_replace_button_symbol_style_inner(b) {
  html_border_radius_em(b, 0.5);
  html_margin_em(b, 0.09);
  html_border_none(b);
  html_style_padding_x(b, "0.37em");
  html_style_padding_y(b, "0.1em");
}

import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_border_none } from "./html_border_none.mjs";
import { html_margin_em } from "./html_margin_em.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
export function app_shared_symbol_tile_style_inner(b) {
  html_border_radius(b, app_shared_border_radius());
  html_border_none(b);
  html_style_padding_x(b, "0.37em");
  html_style_padding_y(b, "0.1em");
  html_margin_em(b, 0.09);
}

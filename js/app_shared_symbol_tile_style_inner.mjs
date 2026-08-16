import { app_shared_code_padding_x } from "./app_shared_code_padding_x.mjs";
import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_border_none } from "./html_border_none.mjs";
import { html_margin_em } from "./html_margin_em.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
export function app_shared_symbol_tile_style_inner(b) {
  let border_radius = app_shared_border_radius();
  html_border_radius(b, border_radius);
  html_border_none(b);
  let value = app_shared_code_padding_x();
  html_style_padding_x(b, value);
  let value2 = app_shared_spaced_frame_gap();
  html_style_padding_y(b, value2);
  html_margin_em(b, 0.09);
}

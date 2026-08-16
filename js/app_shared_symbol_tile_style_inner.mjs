import { app_shared_code_rounded_unbordered_padded } from "./app_shared_code_rounded_unbordered_padded.mjs";
import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_margin_em } from "./html_margin_em.mjs";
export function app_shared_symbol_tile_style_inner(b) {
  app_shared_code_rounded_unbordered_padded(b);
  let value = app_shared_spaced_frame_gap();
  html_style_padding_y(b, value);
  html_margin_em(b, 0.09);
}

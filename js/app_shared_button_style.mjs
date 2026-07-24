import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_button_background_color } from "./app_shared_button_background_color.mjs";
import { app_shared_symbol_tile_style } from "./app_shared_symbol_tile_style.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_color_gray } from "./app_shared_color_gray.mjs";
export function app_shared_button_style(b) {
  app_shared_symbol_tile_style(b);
  let c = app_shared_button_background_color();
  html_style_background_color_set(b, c);
  "the border reads a step darker than the fill (gray-400 on gray-200) so it stays visibly prominent — the lighter gray_medium washed out on the gray fill";
  let border_color = app_shared_color_gray();
  html_border(b, "0.05em", border_color);
}

import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_button_background_color } from "./app_shared_button_background_color.mjs";
import { app_shared_symbol_tile_style } from "./app_shared_symbol_tile_style.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_color_gray_medium } from "./app_shared_color_gray_medium.mjs";
export function app_shared_button_style(b) {
  app_shared_symbol_tile_style(b);
  let c = app_shared_button_background_color();
  html_style_background_color_set(b, c);
  let border_color = app_shared_color_gray_medium();
  html_border(b, "0.05em", border_color);
}

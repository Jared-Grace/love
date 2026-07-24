import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_button_background_color } from "./app_shared_button_background_color.mjs";
import { app_shared_symbol_tile_style } from "./app_shared_symbol_tile_style.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_color_gray_medium } from "./app_shared_color_gray_medium.mjs";
export function app_shared_button_style(b) {
  app_shared_symbol_tile_style(b);
  let c = app_shared_button_background_color();
  html_style_background_color_set(b, c);
  ("the border is one step lighter than plain gray (gray_medium is #aeb4be, between gray-300 and gray-400) - visible on the gray_light fill without reading as heavy. The earlier wash-out was the OLD gray_medium (#d1d5db); this darker value stays clearly visible");
  let border_color = app_shared_color_gray_medium();
  html_border(b, "0.05em", border_color);
}

import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_shared_symbol_tile_style_box_shadow_value_width_set } from "./app_shared_symbol_tile_style_box_shadow_value_width_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_code_container_generic } from "./app_code_container_generic.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_container_blue_medium_background_color } from "./app_shared_container_blue_medium_background_color.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
export function app_code_container_medium_blue(parent) {
  "draws from the shared graduated-blue palette (the medium fill plus the blue border as its shadow) so this app's medium-blue container matches every other app's, instead of its own one-off hsl blues";
  let container = app_code_container_generic(parent);
  let fill = app_shared_container_blue_medium_background_color();
  html_style_background_color_set(container, fill);
  let value = text_combine(0.3, "em");
  html_style_margin_y(container, value);
  let shadow = app_shared_color_blue_pale();
  app_shared_symbol_tile_style_box_shadow_value_width_set(
    container,
    shadow,
    "0.08",
  );
  return container;
}

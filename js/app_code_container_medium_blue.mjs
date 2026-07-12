import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_replace_button_symbol_style_box_shadow_value_width_set } from "./app_replace_button_symbol_style_box_shadow_value_width_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_code_container_generic } from "./app_code_container_generic.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_container_medium_blue(parent) {
  let container = app_code_container_generic(parent);
  html_style_background_color_set(container, "hsl(210, 71%, 79%)");
  html_style_margin_y(container, text_combine(0.3, "em"));
  app_replace_button_symbol_style_box_shadow_value_width_set(
    container,
    "hsl(210, 61%, 72%)",
    "0.08",
  );
  return container;
}

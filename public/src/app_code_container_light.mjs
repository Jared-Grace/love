import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { app_replace_button_symbol_style_box_shadow_value_width_set } from "../../../love/public/src/app_replace_button_symbol_style_box_shadow_value_width_set.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { app_code_container_generic } from "../../../love/public/src/app_code_container_generic.mjs";
export function app_code_container_light(parent) {
  let container = app_code_container_generic(parent);
  html_style_background_color_set(container, "hsl(210, 71%, 79%)");
  html_style_margin_y(container, 0.3 + "em");
  app_replace_button_symbol_style_box_shadow_value_width_set(
    container,
    "hsl(210, 59%, 67%)",
    "0.09",
  );
  return container;
}

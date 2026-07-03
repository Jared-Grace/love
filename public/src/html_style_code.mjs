import { html_style_padding_x } from "../../../love/public/src/html_style_padding_x.mjs";
import { html_border_none } from "../../../love/public/src/html_border_none.mjs";
import { html_border_radius_em } from "../../../love/public/src/html_border_radius_em.mjs";
import { app_replace_button_symbol_style_box_shadow_value_set } from "../../../love/public/src/app_replace_button_symbol_style_box_shadow_value_set.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { html_font_jetbrains_mono } from "../../../love/public/src/html_font_jetbrains_mono.mjs";
export function html_style_code(component) {
  html_font_jetbrains_mono(component);
  html_style_background_color_set(component, "white");
  app_replace_button_symbol_style_box_shadow_value_set(
    component,
    "rgb(210, 232, 255)",
  );
  html_border_radius_em(component, 0.5);
  html_border_none(component);
  html_style_padding_x(component, "0.37em");
}

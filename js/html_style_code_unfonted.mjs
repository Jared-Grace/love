import { app_shared_code_padding_x } from "./app_shared_code_padding_x.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_border_none } from "./html_border_none.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function html_style_code_unfonted(
  component,
  color_background,
  color_font,
) {
  html_style_background_color_set(component, color_background);
  html_font_color_set(component, color_font);
  let border_radius = app_shared_border_radius();
  html_border_radius(component, border_radius);
  html_border_none(component);
  let value = app_shared_code_padding_x();
  html_style_padding_x(component, value);
}

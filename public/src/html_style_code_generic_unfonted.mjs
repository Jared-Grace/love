import { html_style_padding_x } from "../../../love/public/src/html_style_padding_x.mjs";
import { html_border_none } from "../../../love/public/src/html_border_none.mjs";
import { html_border_radius_em } from "../../../love/public/src/html_border_radius_em.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
export function html_style_code_generic_unfonted(
  component,
  color_background,
  color_font,
) {
  html_style_background_color_set(component, color_background);
  html_font_color_set(component, color_font);
  html_border_radius_em(component, 0.5);
  html_border_none(component);
  html_style_padding_x(component, "0.37em");
}

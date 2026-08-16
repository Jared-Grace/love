import { app_shared_code_rounded_unbordered_padded } from "./app_shared_code_rounded_unbordered_padded.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function html_style_code_unfonted(
  component,
  color_background,
  color_font,
) {
  html_style_background_color_set(component, color_background);
  html_font_color_set(component, color_font);
  app_shared_code_rounded_unbordered_padded(component);
}

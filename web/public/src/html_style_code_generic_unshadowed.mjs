import { html_style_code_generic_unfonted } from "../../../love/public/src/html_style_code_generic_unfonted.mjs";
import { html_font_jetbrains_mono } from "../../../love/public/src/html_font_jetbrains_mono.mjs";
export function html_style_code_generic_unshadowed(
  component,
  color_background,
  color_font,
) {
  html_font_jetbrains_mono(component);
  html_style_code_generic_unfonted(component, color_background, color_font);
}

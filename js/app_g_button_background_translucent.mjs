import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_button_background_translucent(component, base_color, alpha) {
  "tint a g button's background to a translucent version of base_color by appending a 2-char hex alpha suffix";
  html_style_background_color_set(component, text_combine(base_color, alpha));
}

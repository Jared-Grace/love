import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { text_take } from "./text_take.mjs";
import { html_border_invalid_color } from "./html_border_invalid_color.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_button_wrong_generic(b, alpha_channel) {
  let v = html_border_invalid_color();
  let t = text_combine(text_take(v, 7), alpha_channel);
  html_style_background_color_set(b, t);
}

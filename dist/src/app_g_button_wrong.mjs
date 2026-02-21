import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { text_take } from "../../../love/public/src/text_take.mjs";
import { html_border_invalid_color } from "../../../love/public/src/html_border_invalid_color.mjs";
export function app_g_button_wrong(b) {
  let v = html_border_invalid_color();
  let t = text_take(v, 7) + "cd";
  html_style_background_color_set(b, t);
}

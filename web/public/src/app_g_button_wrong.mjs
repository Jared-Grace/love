import { html_style_background_color } from "../../../love/public/src/html_style_background_color.mjs";
import { string_take } from "../../../love/public/src/string_take.mjs";
import { html_border_invalid_color } from "../../../love/public/src/html_border_invalid_color.mjs";
export function app_g_button_wrong(b) {
  let v = html_border_invalid_color();
  let t = string_take(v, 7) + "cd";
  html_style_background_color(b, t);
}

import { text_take } from "./text_take.mjs";
import { html_border_invalid_color } from "./html_border_invalid_color.mjs";
import { app_g_button_background_translucent } from "./app_g_button_background_translucent.mjs";
export function app_g_button_wrong_generic(b, alpha_channel) {
  let v = html_border_invalid_color();
  app_g_button_background_translucent(b, text_take(v, 7), alpha_channel);
}

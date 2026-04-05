import { app_shared_button_uncolored_style_assign } from "../../../love/public/src/app_shared_button_uncolored_style_assign.mjs";
import { app_a_control_style } from "../../../love/public/src/app_a_control_style.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_a_button(parent, text, lambda) {
  let b = html_button(parent, text, lambda);
  app_a_control_style(b);
  app_shared_button_uncolored_style_assign(b);
  return b;
}

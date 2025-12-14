import { app_karate_button_uncolored_style_assign } from "../../../karate_code/public/src/app_karate_button_uncolored_style_assign.mjs";
import { app_a_control_style } from "../../../love/public/src/app_a_control_style.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_a_button(root, text, lambda2) {
  let b = html_button(root, text, lambda2);
  app_a_control_style(b);
  app_karate_button_uncolored_style_assign(b);
  return b;
}

import { app_karate_button_uncolored_style_assign } from "../../../karate_code/public/src/app_karate_button_uncolored_style_assign.mjs";
import { app_a_control_style_wide } from "../../../love/public/src/app_a_control_style_wide.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_a_button_wide(parent, text, lambda) {
  let component = html_button(parent, text, lambda);
  app_a_control_style_wide(component);
  app_karate_button_uncolored_style_assign(component);
}

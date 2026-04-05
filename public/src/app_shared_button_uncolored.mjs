import { app_shared_button_uncolored_style_assign } from "../../../love/public/src/app_shared_button_uncolored_style_assign.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { app_karate_style_control } from "../../../karate_code/public/src/app_karate_style_control.mjs";
export function app_shared_button_uncolored(div, text, lambda) {
  arguments_assert(arguments, 3);
  let component = html_button(div, text, lambda);
  app_karate_style_control(component);
  app_shared_button_uncolored_style_assign(component);
  return component;
}

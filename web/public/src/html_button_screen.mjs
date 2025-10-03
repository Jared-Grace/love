import { app_screen_set_lambda } from "../../../love/public/src/app_screen_set_lambda.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function html_button_screen(parent, text, context, screen_name) {
  let lambda = app_screen_set_lambda(context, screen_name);
  let component = html_button(parent, text, lambda);
  return component;
}

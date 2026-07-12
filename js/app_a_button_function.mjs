import { app_a_button } from "./app_a_button.mjs";
import { app_a_button_function_text_selected } from "./app_a_button_function_text_selected.mjs";
export function app_a_button_function(context, parent, lambda) {
  let text = app_a_button_function_text_selected(context);
  let b = app_a_button(parent, text, lambda);
  return b;
}

import { app_a_function_name_selected } from "./app_a_function_name_selected.mjs";
import { app_a_button_function_text } from "./app_a_button_function_text.mjs";
export function app_a_button_function_text_selected(context) {
  let f_name = app_a_function_name_selected(context);
  let text = app_a_button_function_text(f_name);
  return text;
}

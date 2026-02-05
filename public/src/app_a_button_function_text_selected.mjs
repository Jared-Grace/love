import { app_a_function_name_selected } from "../../../love/public/src/app_a_function_name_selected.mjs";
import { app_a_button_function_text } from "../../../love/public/src/app_a_button_function_text.mjs";
export function app_a_button_function_text_selected(context) {
  let f_name = app_a_function_name_selected(context);
  const text = app_a_button_function_text(f_name);
  return text;
}

import { app_a_function_name_selected } from "../../../love/public/src/app_a_function_name_selected.mjs";
import { app_a_button_function_text } from "../../../love/public/src/app_a_button_function_text.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_button_function_text_selected(context) {
  marker("1");
  let f_name = app_a_function_name_selected(context);
  const text = app_a_button_function_text(f_name);
  return text;
}

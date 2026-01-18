import { app_a_button_function_text } from "../../../love/public/src/app_a_button_function_text.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { app_a_function_name_selected_key } from "../../../love/public/src/app_a_function_name_selected_key.mjs";
export function app_a_button_function_text_selected(context) {
  marker("1");
  const key = app_a_function_name_selected_key();
  let f_name = storage_local_get_context(context, key);
  const text = app_a_button_function_text(f_name);
  return text;
}

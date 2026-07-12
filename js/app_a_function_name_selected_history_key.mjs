import { app_a_function_name_selected_key } from "./app_a_function_name_selected_key.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_a_function_name_selected_history_key() {
  let key = text_combine(app_a_function_name_selected_key(), "_history");
  return key;
}

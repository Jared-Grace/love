import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { app_a_function_name_selected_key } from "./app_a_function_name_selected_key.mjs";
export function app_a_function_name_selected(context) {
  let key = app_a_function_name_selected_key();
  let f_name = storage_local_get_context(context, key);
  return f_name;
}

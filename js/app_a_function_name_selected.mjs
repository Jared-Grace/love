import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { app_a_function_name_selected_key } from "./app_a_function_name_selected_key.mjs";
export function app_a_function_name_selected(context) {
  "the function this tab is working on, so a second tab can hold a different one";
  let key = app_a_function_name_selected_key();
  let f_name = storage_session_get_context(context, key);
  return f_name;
}

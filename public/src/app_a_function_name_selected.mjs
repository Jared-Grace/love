import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { app_a_function_name_selected_key } from "../../../love/public/src/app_a_function_name_selected_key.mjs";
export function app_a_function_name_selected(context) {
  const key = app_a_function_name_selected_key();
  let f_name = storage_local_get_context(context, key);
  return f_name;
}

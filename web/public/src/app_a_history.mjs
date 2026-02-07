import { app_a_list_chooser } from "../../../love/public/src/app_a_list_chooser.mjs";
import { app_a_function_name_selected_history_key } from "../../../love/public/src/app_a_function_name_selected_history_key.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_a_history(context) {
  let root = html_clear_context(context);
  let key = app_a_function_name_selected_history_key();
  let h = storage_local_get_context(context, key);
  let r = app_a_list_chooser(context, "function", h, lambda$f_name);
}

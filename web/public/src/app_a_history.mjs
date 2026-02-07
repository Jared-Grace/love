import { app_a_function_select_curry } from "../../../love/public/src/app_a_function_select_curry.mjs";
import { app_a_button_function_if_exists } from "../../../love/public/src/app_a_button_function_if_exists.mjs";
import { app_a_list_chooser } from "../../../love/public/src/app_a_list_chooser.mjs";
import { app_a_function_name_selected_history_key } from "../../../love/public/src/app_a_function_name_selected_history_key.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
export function app_a_history(context) {
  app_a_button_function_if_exists(context);
  let key = app_a_function_name_selected_history_key();
  let h = storage_local_get_context(context, key);
  let on_select = app_a_function_select_curry(context);
  let r = app_a_list_chooser(context, "function", h, on_select);
}

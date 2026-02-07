import { app_a_function_name_selected_history_key } from "../../../love/public/src/app_a_function_name_selected_history_key.mjs";
import { html_div_text_json } from "../../../love/public/src/html_div_text_json.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_a_history(context) {
  let root = html_clear_context(context);
  let key = app_a_function_name_selected_history_key();
  let h = storage_local_get_context(context, key);
  html_div_text_json(root, h);
}

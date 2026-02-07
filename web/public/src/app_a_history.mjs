import { html_div_text_json } from "../../../love/public/src/html_div_text_json.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_a_history(context) {
  let root = html_clear_context(context);
  let h = storage_local_get_context(context, "f_name_selected_history");
  html_div_text_json(root, h);
}

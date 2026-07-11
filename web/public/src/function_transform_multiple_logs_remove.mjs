import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { js_log_remove } from "../../../love/public/src/js_log_remove.mjs";
export async function function_transform_multiple_logs_remove(f_names_comma) {
  let r = await function_transform(f_names_comma, js_log_remove);
  return r;
}

import { js_log_remove } from "../../../love/public/src/js_log_remove.mjs";
import { function_transform_multiple } from "../../../love/public/src/function_transform_multiple.mjs";
export async function function_transform_multiple_logs_remove(f_names_comma) {
  let r = await function_transform_multiple(js_log_remove.name, f_names_comma);
  return r;
}

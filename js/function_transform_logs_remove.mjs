import { function_transform } from "./function_transform.mjs";
import { js_log_remove } from "./js_log_remove.mjs";
export async function function_transform_logs_remove(f_name) {
  let r = await function_transform(f_name, js_log_remove);
  return r;
}

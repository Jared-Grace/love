import { function_transform } from "./function_transform.mjs";
import { js_log_assignments_add } from "./js_log_assignments_add.mjs";
export async function function_transform_logs_assignments_add(f_name) {
  let r = await function_transform(f_name, js_log_assignments_add);
  return r;
}

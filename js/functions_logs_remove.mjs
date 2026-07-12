import { functions_transform } from "./functions_transform.mjs";
import { js_log_remove } from "./js_log_remove.mjs";
export async function functions_logs_remove() {
  let lambda = js_log_remove;
  let v = await functions_transform(lambda);
  return v;
}

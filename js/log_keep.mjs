import { js_log_remove_workflow } from "./js_log_remove_workflow.mjs";
import { log_inner } from "./log_inner.mjs";
export function log_keep(f_name, message) {
  ("see: ", js_log_remove_workflow);
  log_inner(f_name, message);
}

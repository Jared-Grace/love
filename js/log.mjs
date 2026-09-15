import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { log_inner } from "./log_inner.mjs";
export function log(f_name, message) {
  function_duplicate_kind_parallel();
  log_inner(f_name, message);
}

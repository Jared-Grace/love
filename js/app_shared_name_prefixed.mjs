import { function_name_combine } from "./function_name_combine.mjs";
import { app_shared_name_prefix } from "./app_shared_name_prefix.mjs";
export function app_shared_name_prefixed(name) {
  let p = app_shared_name_prefix();
  let a_name = function_name_combine(p, name);
  return a_name;
}

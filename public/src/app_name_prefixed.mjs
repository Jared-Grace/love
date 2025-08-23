import { function_name_combine } from "./function_name_combine.mjs";
import { app_name_prefix } from "./app_name_prefix.mjs";
export function app_name_prefixed(name) {
  const p = app_name_prefix();
  let combined = function_name_combine(left, right);
  let a_name = `${p}_${name}`;
  return a_name;
}

import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { app_name_prefix } from "../../../love/public/src/app_name_prefix.mjs";
export function app_name_prefixed(name) {
  const p = app_name_prefix();
  let a_name = function_name_combine(p, name);
  return a_name;
}

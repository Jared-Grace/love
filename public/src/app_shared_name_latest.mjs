import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { app_shared_name_prefixed } from "../../../love/public/src/app_shared_name_prefixed.mjs";
export function app_shared_name_latest(name) {
  let a_name = app_shared_name_prefixed(name);
  let combined = function_name_combine(a_name, "latest");
  return combined;
}

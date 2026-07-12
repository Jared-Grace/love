import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
export function app_shared_name_latest(name) {
  let a_name = app_shared_name_prefixed(name);
  let right = app_shared_name_latest_text();
  let combined = function_name_combine(a_name, right);
  return combined;
}

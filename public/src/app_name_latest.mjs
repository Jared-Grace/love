import { marker } from "../../../love/public/src/marker.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
export function app_name_latest(name) {
  marker("1");
  let a_name = app_name_prefixed(name);
  let combined = function_name_combine(a_name, "latest");
  return combined;
}

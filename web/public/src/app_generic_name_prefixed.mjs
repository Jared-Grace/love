import { marker } from "../../../love/public/src/marker.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { app_generic_name_prefix } from "../../../love/public/src/app_generic_name_prefix.mjs";
export function app_generic_name_prefixed(name) {
  marker("1");
  const p = app_generic_name_prefix();
  let a_name = function_name_combine(p, name);
  return a_name;
}

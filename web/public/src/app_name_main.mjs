import {function_name_combine_multiple} from "./function_name_combine_multiple.mjs";
import {app_name_prefixed} from "./app_name_prefixed.mjs";
export function app_name_main(a) {
  let a_name = app_name_prefixed(a);
  let combined = function_name_combine_multiple([a_name, "main"]);
  return combined;
}

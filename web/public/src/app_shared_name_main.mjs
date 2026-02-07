import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { app_generic_name_prefixed } from "../../../love/public/src/app_generic_name_prefixed.mjs";
export function app_shared_name_main(a) {
  let a_name = app_generic_name_prefixed(a);
  let combined = function_name_combine_multiple([a_name, "main"]);
  return combined;
}

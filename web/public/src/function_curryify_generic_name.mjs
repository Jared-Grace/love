import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
export function function_curryify_generic_name(f_name) {
  let combined = function_name_combine(f_name, "curried");
  return combined;
}

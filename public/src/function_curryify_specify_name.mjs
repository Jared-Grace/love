import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_curryify_generic_name } from "../../../love/public/src/function_curryify_generic_name.mjs";
export function function_curryify_specify_name(unaliased) {
  let n = function_curryify_generic_name(unaliased);
  let combined = function_name_combine(n, "specify");
  return combined;
}

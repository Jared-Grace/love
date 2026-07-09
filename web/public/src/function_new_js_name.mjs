import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
export function function_new_js_name(f_name_unprefixed) {
  let combined = function_name_combine("js", f_name_unprefixed);
  return combined;
}

import { fn_name } from "./fn_name.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
export function js_dollar_new_name(code) {
  let combined = function_name_combine(fn_name("js_dollar"), code);
  return combined;
}

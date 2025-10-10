import { js_dollar } from "../../../love/public/src/js_dollar.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
export function js_dollar_new_name(code) {
  let combined2 = function_name_combine(js_dollar.name, code);
  return combined2;
}

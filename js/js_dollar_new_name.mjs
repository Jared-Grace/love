import { js_dollar } from "./js_dollar.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
export function js_dollar_new_name(code) {
  let combined = function_name_combine(js_dollar.name, code);
  return combined;
}

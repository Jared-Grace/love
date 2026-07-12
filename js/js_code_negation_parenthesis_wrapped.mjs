import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_code_negation } from "./js_code_negation.mjs";
export function js_code_negation_parenthesis_wrapped(item) {
  let inside = js_code_negation(item);
  let wrapped = js_code_wrap_parenthesis(inside);
  return wrapped;
}

import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { digit_negative_random } from "./digit_negative_random.mjs";
export function digit_negative_random_parenthesis_wrapped() {
  let combined = digit_negative_random();
  let wrapped = js_code_wrap_parenthesis(combined);
  return wrapped;
}

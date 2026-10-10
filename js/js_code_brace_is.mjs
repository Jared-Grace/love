import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { equal } from "./equal.mjs";
export function js_code_brace_is(text) {
  arguments_assert(arguments, 1);
  ("whether a token is a brace, a { or a }");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  let is = equal(text, left) || equal(text, right);
  return is;
}

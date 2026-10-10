import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_code_braces_sequence(code) {
  arguments_assert(arguments, 1);
  ("only the braces of code, in the order they stand, with a space between each: if (a) { if (b) { ... } } if (c) { ... } gives { { } } { }");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  let braces = [];
  for (let i = 0; less_than(i, code.length); i++) {
    let c = code[i];
    if (equal(c, left) || equal(c, right)) {
      list_add(braces, c);
    }
  }
  let joined = list_join_space(braces);
  return joined;
}

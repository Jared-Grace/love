import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { equal } from "./equal.mjs";
import { js_code_brace_partner_index } from "./js_code_brace_partner_index.mjs";
import { less_than } from "./less_than.mjs";
export function app_code_braces_pair_index(code, index) {
  arguments_assert(arguments, 2);
  ("which pair of braces the brace at index belongs to, counted in the order the pairs open, so a { and the } that closes it give the same number; found by the same count a learner is taught, one brace at a time");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  let opening = index;
  if (equal(code[index], right)) {
    opening = js_code_brace_partner_index(code, index);
  }
  let pair = 0;
  for (let j = 0; less_than(j, opening); j++) {
    if (equal(code[j], left)) {
      pair += 1;
    }
  }
  return pair;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_brace_mark_left } from "./app_code_brace_mark_left.mjs";
import { app_code_brace_mark_right } from "./app_code_brace_mark_right.mjs";
import { integer_is_assert } from "./integer_is_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_brace_unmarked(text) {
  arguments_assert(arguments, 1);
  ("the code a marked question holds, and where in that code the pointed-at brace stands; the index is -1 when nothing is pointed at");
  let left = app_code_brace_mark_left();
  let right = app_code_brace_mark_right();
  let index = text.indexOf(left);
  integer_is_assert(index);
  let code = text;
  if (not_equal(index, -1)) {
    let before = text.slice(0, index);
    let brace = text[index + 1];
    let after = text.slice(index + 3);
    let b = equal(text[index + 2], right);
    assert(b);
    code = text_combine_multiple([before, brace, after]);
  }
  let unmarked = {
    code,
    index,
  };
  return unmarked;
}

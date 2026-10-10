import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_brace_mark_left } from "./app_code_brace_mark_left.mjs";
import { app_code_brace_mark_right } from "./app_code_brace_mark_right.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_brace_marked(code, index) {
  arguments_assert(arguments, 2);
  ("code with the brace at index pointed at, written as the text a question carries");
  let before = code.slice(0, index);
  let brace = code[index];
  let after = code.slice(index + 1);
  let left = app_code_brace_mark_left();
  let right = app_code_brace_mark_right();
  let marked = text_combine_multiple([before, left, brace, right, after]);
  return marked;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_block_dots() {
  arguments_assert(arguments, 0);
  ("braces with the lines inside left out as three dots: { ... }");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  let code = text_combine_multiple([left, " ... ", right]);
  return code;
}

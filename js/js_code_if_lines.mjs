import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
export function js_code_if_lines(condition, statement) {
  arguments_assert(arguments, 2);
  ("an if around one line, as the three lines it is written on: if (condition) {, the line pushed in by two spaces, and the closing brace");
  ("Handed back as lines rather than one string, because the card that shows a program and what it writes out takes its program as lines; a caller wanting one string joins them with a newline.");
  ("Two spaces in, the indent this repo's own code is formatted with, so a learner who later reads real code meets the shape they were taught.");
  let lines = js_code_if_lines_multiple(condition, [statement]);
  return lines;
}

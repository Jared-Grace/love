import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_map } from "./list_map.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function js_code_keyword_block_lines_multiple(
  keyword,
  condition,
  statements,
) {
  "a keyword with a condition around several lines, as the lines it is written on: keyword (condition) {, each line pushed in by two spaces, and the closing brace - the shape if and while share";
  "Two spaces in, the indent this repo's own code is formatted with, so a learner who later reads real code meets the shape they were taught.";
  let wrapped = js_code_wrap_parenthesis(condition);
  let left = js_code_brace_left();
  let opening = text_combine_multiple([keyword, " ", wrapped, " ", left]);
  function indented(statement) {
    let inside = text_combine("  ", statement);
    return inside;
  }
  let insides = list_map(statements, indented);
  let closing = js_code_brace_right();
  let lines = list_concat_multiple([[opening], insides, [closing]]);
  return lines;
}

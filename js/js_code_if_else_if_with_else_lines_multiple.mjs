import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { js_keyword_else } from "./js_keyword_else.mjs";
import { list_first } from "./list_first.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function js_code_if_else_if_with_else_lines_multiple(
  condition,
  statements_yes,
  condition_else,
  statements_else_if,
  statements_no,
) {
  "an if followed by else if and then else, around several lines each, as the lines it is written on: if (condition) {, its lines pushed in, } else if (condition_else) {, its lines pushed in the same, } else {, its lines pushed in the same, and the closing brace";
  "Built as an if whose closing brace is joined by else to an if with an else, so it is pushed in exactly as those two shapes are and cannot drift apart from them.";
  let yes_part = js_code_if_lines_multiple(condition, statements_yes);
  let if_else = js_code_if_else_lines_multiple(
    condition_else,
    statements_else_if,
    statements_no,
  );
  let closing = list_remove_last(yes_part);
  let keyword = js_keyword_else();
  let opening = list_first(if_else);
  let middle = text_combine_multiple([closing, " ", keyword, " ", opening]);
  let else_part = list_skip(if_else, 1);
  let lines = list_concat_multiple([yes_part, [middle], else_part]);
  return lines;
}

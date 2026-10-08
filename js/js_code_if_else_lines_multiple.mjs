import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { js_keyword_else } from "./js_keyword_else.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function js_code_if_else_lines_multiple(
  condition,
  statements_yes,
  statements_no,
) {
  "an if with an else around several lines each, as the lines it is written on: if (condition) {, the lines run when it is true pushed in by two spaces, } else {, the lines run when it is false pushed in the same, and the closing brace";
  "Built from the if around several lines twice, the first one's closing brace and the second one's opening line giving way to } else {, rather than spelled out again, so the two shapes cannot drift apart in how they are pushed in.";
  let yes_part = js_code_if_lines_multiple(condition, statements_yes);
  let if_no = js_code_if_lines_multiple(condition, statements_no);
  let closing = list_remove_last(yes_part);
  let keyword = js_keyword_else();
  let left = js_code_brace_left();
  let middle = text_combine_multiple([closing, " ", keyword, " ", left]);
  let no_part = list_skip(if_no, 1);
  let lines = list_concat_multiple([yes_part, [middle], no_part]);
  return lines;
}

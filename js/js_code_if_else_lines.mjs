import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { list_last } from "./list_last.mjs";
import { js_keyword_else } from "./js_keyword_else.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
export function js_code_if_else_lines(condition, statement_yes, statement_no) {
  "an if with an else, as the five lines it is written on: if (condition) {, the line run when it is true pushed in by two spaces, } else {, the line run when it is false pushed in the same, and the closing brace";
  "Built from the if around one line, whose closing brace becomes } else {, rather than spelled out again, so the two shapes cannot drift apart in how they are pushed in.";
  let if_yes = js_code_if_lines(condition, statement_yes);
  let opening = list_first(if_yes);
  let inside_yes = list_get(if_yes, 1);
  let closing = list_last(if_yes);
  let keyword = js_keyword_else();
  let left = js_code_brace_left();
  let middle = text_combine_multiple([closing, " ", keyword, " ", left]);
  let inside_no = text_combine("  ", statement_no);
  let lines = [opening, inside_yes, middle, inside_no, closing];
  return lines;
}

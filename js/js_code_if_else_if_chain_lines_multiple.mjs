import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_size } from "./list_size.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { js_keyword_else } from "./js_keyword_else.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function js_code_if_else_if_chain_lines_multiple(
  conditions,
  statement_lists,
  statements_no,
) {
  "an if followed by as many else ifs as there are conditions after the first, and then else, around several lines each, as the lines it is written on: if (first condition) {, its lines, } else if (next condition) {, its lines, ... } else {, the lines run when none is true, and the closing brace";
  "Built one link at a time: the last condition is an if with an else, and each condition before it is an if whose closing brace is joined by else to the rest, so every link is pushed in exactly as an if and an if with an else are.";
  let condition = list_first(conditions);
  let statements = list_first(statement_lists);
  let conditions_rest = list_skip(conditions, 1);
  let statement_lists_rest = list_skip(statement_lists, 1);
  let left = list_size(conditions_rest);
  if (equal(left, 0)) {
    let last = js_code_if_else_lines_multiple(
      condition,
      statements,
      statements_no,
    );
    return last;
  }
  let yes_part = js_code_if_lines_multiple(condition, statements);
  let rest = js_code_if_else_if_chain_lines_multiple(
    conditions_rest,
    statement_lists_rest,
    statements_no,
  );
  let closing = list_remove_last(yes_part);
  let keyword = js_keyword_else();
  let opening = list_first(rest);
  let middle = text_combine_multiple([closing, " ", keyword, " ", opening]);
  let rest_after = list_skip(rest, 1);
  let lines = list_concat_multiple([yes_part, [middle], rest_after]);
  return lines;
}

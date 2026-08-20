import { add } from "./add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_lesson_sum_lines() {
  arguments_assert(arguments, 0);
  ("the two lines the boxes above these lessons' first question are built from, and what each of them writes out: each line writes out what two numbers add up to");
  ("Both screens that read this show a program the learner has already read on the screen before, which is the whole reason either screen works - a box holding a program they know turns the next box into a single change rather than a new program to take in. That only holds while the two screens show the same program, so the lines and the numbers are said once here rather than once on each screen, where they could drift apart without anything looking wrong.");
  ("What each line writes out is handed back beside it rather than left to the caller to add up, because a screen that worked the answers out for itself could disagree with the line it is showing, and a learner reading the box would have no way to tell which of the two was the mistake.");
  let plus = js_operator_plus_symbol();
  let first_left = 20;
  let first_right = 30;
  let last_left = 40;
  let last_right = 20;
  let first_total = add(first_left, first_right);
  let last_total = add(last_left, last_right);
  let first_sum = js_code_binary_spaced_nb(first_left, plus, first_right);
  let first_line = js_code_console_log_statement(first_sum);
  let last_sum = js_code_binary_spaced_nb(last_left, plus, last_right);
  let last_line = js_code_console_log_statement(last_sum);
  let lines = {
    first_line: first_line,
    last_line: last_line,
    first_total: first_total,
    last_total: last_total,
  };
  return lines;
}

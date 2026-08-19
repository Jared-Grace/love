import { add } from "./add.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_comment_prefix } from "./js_code_comment_prefix.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_comment_start } from "./js_comment_start.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_comment_skip_line_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: the two lines that write out, then the slashes put in front of the second of them, then the same slashes put in front of the first instead");
  ("The first box is the program from the screen before this one, numbers and all. A learner who has just read it reads it here as something they already know, which is what makes the second box a single change rather than a new program.");
  ("The second box is that program with two slashes added and nothing else touched, so there is one thing between the boxes that could account for an answer going missing. The learner reads the first answer again and finds the second one gone.");
  ("The third box is the whole point of the second. An answer disappearing once could have meant a program only ever writes out its first line, and the only way to rule that out is to put the slashes on the other line and show the other answer going instead. Said in a sentence it would have to be believed; shown, it is read off the card.");
  ("The numbers are in none of the programs the questions ask about - neither as something written nor as something worked out - so no number a learner meets here turns up later as something to recognise rather than to read.");
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
  let prefix = js_code_comment_prefix();
  let first_noted = text_combine(prefix, first_line);
  let last_noted = text_combine(prefix, last_line);
  let box_both = app_code_container_light_blue(root);
  html_div_cycle_code(box_both, [
    "Remember, two lines that write out give two answers",
  ]);
  let both = list_join_newline([first_total, last_total]);
  app_code_code_lines_writes_out(box_both, [first_line, last_line], both);
  let slashes = js_comment_start();
  let box_last_off = app_code_container_light_blue(root);
  html_div_cycle_code(box_last_off, [
    "We can put two slashes (",
    slashes,
    ") in front of the second line",
  ]);
  let value = text_to(first_total);
  app_code_code_lines_writes_out(box_last_off, [first_line, last_noted], value);
  html_div_cycle_code(box_last_off, [
    "That line is a note now, so it is skipped",
  ]);
  html_div_cycle_code(box_last_off, ["Its answer is gone"]);
  let box_first_off = app_code_container_light_blue(root);
  html_div_cycle_code(box_first_off, [
    "If we put the slashes in front of the first line instead",
  ]);
  let value2 = text_to(last_total);
  app_code_code_lines_writes_out(
    box_first_off,
    [first_noted, last_line],
    value2,
  );
  html_div_cycle_code(box_first_off, [
    "Only the line without the slashes writes anything out",
  ]);
}

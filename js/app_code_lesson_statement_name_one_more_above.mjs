import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { add } from "./add.mjs";
import { js_code_binary } from "./js_code_binary.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function app_code_lesson_statement_name_one_more_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: the line the screen before this one ended on, the same line with a written 1 where the second name was, and then that line written twice");
  ("The screen before this one put a name on both sides of the equals. Everything about how that line is read - the right side worked out first, the name filled second - was settled there, so this screen changes one thing on the right of the plus and nothing else.");
  ("The last box is the reason the screen exists. A written 1 rather than a name is a small change, and on its own it would not be worth a screen; the line done twice is what a learner has never seen, and it is how every count in every program is kept.");
  ("It is shown rather than quizzed. Nothing in it is new - the same line said twice, and a learner has already been told that the name is filled with what the right side came to - so it is something to read and check, and the questions stay on the one line the screen changed.");
  ("The reminder's numbers and this screen's numbers have none in common, so no number on the screen is both a value in one box and an answer in another. A learner checking a box against the one above it would otherwise find the same number in two places and have to work out which it was.");
  let name = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let number_first = 2;
  let number_last = 3;
  let total = add(number_first, number_last);
  let names_sum = js_code_binary(name, plus, name_last);
  let start = 7;
  let more = js_code_binary(name, plus, 1);
  let once = add(start, 1);
  let twice = add(once, 1);
  let box_sum = app_code_container_light_blue(root);
  html_div_cycle_code(box_sum, [
    "Remember, we can give a name what it and another name add up to",
  ]);
  let code = js_code_let_statement(name, number_first);
  html_div_code(box_sum, code);
  let code2 = js_code_let_statement(name_last, number_last);
  html_div_code(box_sum, code2);
  let code3 = js_code_assign_statement(name, names_sum);
  html_div_code(box_sum, code3);
  let code4 = js_code_console_log_statement(name);
  html_div_code(box_sum, code4);
  app_code_writes_out_line(box_sum, total);
  let box_one = app_code_container_light_blue(root);
  html_div_cycle_code(box_one, [
    "The other name can be a written number instead",
  ]);
  let code5 = js_code_let_statement(name, start);
  html_div_code(box_one, code5);
  let code6 = js_code_assign_statement(name, more);
  html_div_code(box_one, code6);
  ("the answer is joined into the writing around it rather than given as a part of its own. The parts alternate between plain writing and code all the way along, so a part standing in an odd place comes out dressed as code - and here only the sum is code.");
  let comes_to = list_join_empty([
    " comes to ",
    once,
    ", so this is the same line",
  ]);
  html_div_cycle_code(box_one, ["", more, comes_to]);
  let code7 = js_code_assign_statement(name, once);
  html_div_code(box_one, code7);
  let code8 = js_code_console_log_statement(name);
  html_div_code(box_one, code8);
  app_code_writes_out_line(box_one, once);
  let box_twice = app_code_container_light_blue(root);
  html_div_cycle_code(box_twice, [
    "Say that line twice and the name goes up twice",
  ]);
  let code9 = js_code_let_statement(name, start);
  html_div_code(box_twice, code9);
  html_div_code(box_twice, code6);
  html_div_code(box_twice, code6);
  let code10 = js_code_console_log_statement(name);
  html_div_code(box_twice, code10);
  app_code_writes_out_line(box_twice, twice);
  html_div_cycle_code(box_twice, ["This is how a program counts"]);
}

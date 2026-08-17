import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { add } from "./add.mjs";
import { js_code_binary } from "./js_code_binary.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function app_code_lesson_statement_name_sum_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: a sum inside console.log the way it has always been written, the same sum with the two numbers given names, and the reason the two lines write out the same thing");
  ("Two things a learner already has, put next to each other, and nothing else. A sum inside console.log was the arithmetic lessons; a name holding a value was the five screens just before this one. Neither is taught again here - what is new is only that the second may stand inside the first.");
  ("No cups on this screen. Every cup drawn so far holds a fruit, and the question here is not what a name is holding - that was settled a screen ago - but where a name may be written. A cup with a number in it would be a second new thing on a screen that has one.");
  ("The reminder uses different numbers from the lesson. Shown with the same two, the answer would already be sitting at the top of the screen and the last box would have nothing left to say.");
  ("The last box writes the sum out a second time with the numbers put back, which is the whole inference done where a learner can watch it: the names are not a new kind of arithmetic, they are the same arithmetic with something else written in the two places. A learner who is told only that it works has to take it; shown the line both ways, they can check it.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let log_name = js_console_log_name();
  let plus = js_operator_plus_symbol();
  let number_first = 2;
  let number_last = 3;
  let total = add(number_first, number_last);
  let numbers_sum = js_code_binary(number_first, plus, number_last);
  let names_sum = js_code_binary(name_first, plus, name_last);
  let remind_first = 6;
  let remind_last = 1;
  let remind_total = add(remind_first, remind_last);
  let remind_sum = js_code_binary(remind_first, plus, remind_last);
  let box_remember = app_code_container_light_blue(root);
  html_div_cycle_code(box_remember, [
    "Remember, we can put a sum inside ",
    log_name,
  ]);
  let code = js_code_console_log_statement(remind_sum);
  html_div_code(box_remember, code);
  app_code_writes_out_line(box_remember, remind_total);
  let box_names = app_code_container_light_blue(root);
  html_div_cycle_code(box_names, ["Suppose we give two numbers names"]);
  let code2 = js_code_let_statement(name_first, number_first);
  html_div_code(box_names, code2);
  let code3 = js_code_let_statement(name_last, number_last);
  html_div_code(box_names, code3);
  html_div_cycle_code(box_names, [
    "Now we can write the names where the numbers were",
  ]);
  let code4 = js_code_console_log_statement(names_sum);
  html_div_code(box_names, code4);
  ("the numbers a name is holding are joined into the writing around them rather than given as parts of their own. The parts alternate between plain writing and code all the way along, so a part standing in an odd place comes out dressed as code - and here only the names are code.");
  let holds_first = list_join_empty([" holds ", number_first, " and "]);
  let holds_last = list_join_empty([
    " holds ",
    number_last,
    ", so this is the same sum",
  ]);
  let box_same = app_code_container_light_blue(root);
  html_div_cycle_code(box_same, [
    "",
    name_first,
    holds_first,
    name_last,
    holds_last,
  ]);
  let code5 = js_code_console_log_statement(numbers_sum);
  html_div_code(box_same, code5);
  app_code_writes_out_line(box_same, total);
}

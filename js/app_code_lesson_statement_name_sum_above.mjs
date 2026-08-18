import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { add } from "./add.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function app_code_lesson_statement_name_sum_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: two numbers added by writing the numbers themselves, and then the same two numbers added by writing the names they were given");
  ("Two things a learner already has, put next to each other, and nothing else. A sum inside console.log was the arithmetic lessons; a name holding a value was the five screens just before this one. Neither is taught again here - what is new is only that the second may stand inside the first.");
  ("The two boxes add the same two numbers and write out the same answer. That is what the second box is being read against: a learner does not have to be told the names are the same sum, because the sum they already know is standing above it with the same total under it.");
  ("So the first box is the one a learner has seen and the second is the one thing that is new, in that order. It was written the other way round once - the new line first and then a line underneath saying which number each name was holding - and that made a learner work out the new line before being given anything to check it against.");
  ("The two ways are named as the two ways: by their value, and by their names instead of writing the numbers out. A learner who has only ever written numbers needs the thing they have been doing all along to be given a name before the other way can be set beside it.");
  ("No cups on this screen. Every cup drawn so far holds a fruit, and the question here is not what a name is holding - that was settled a screen ago - but where a name may be written. A cup with a number in it would be a second new thing on a screen that has one.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let number_first = 2;
  let number_last = 3;
  let total = add(number_first, number_last);
  let numbers_sum = js_code_binary_spaced_nb(number_first, plus, number_last);
  let names_sum = js_code_binary_spaced_nb(name_first, plus, name_last);
  ("the plus is joined into the writing around it rather than given as a part of its own. The parts alternate between plain writing and code all the way along, so a part standing in an odd place comes out dressed as code - and this line has no code in it, only a symbol being named.");
  let add_line = list_join_empty([
    "Remember, we can add (",
    plus,
    ") two numbers together by their value",
  ]);
  let box_remember = app_code_container_light_blue(root);
  html_div_cycle_code(box_remember, [add_line]);
  let code = js_code_console_log_statement(numbers_sum);
  html_div_code(box_remember, code);
  app_code_writes_out_line(box_remember, total);
  let box_names = app_code_container_light_blue(root);
  html_div_cycle_code(box_names, ["Suppose we give two numbers names"]);
  let code2 = js_code_let_statement(name_first, number_first);
  html_div_code(box_names, code2);
  let code3 = js_code_let_statement(name_last, number_last);
  html_div_code(box_names, code3);
  html_div_cycle_code(box_names, [
    "However, we can also add the numbers together using their names, instead of writing out the numbers themselves",
  ]);
  let code4 = js_code_console_log_statement(names_sum);
  html_div_code(box_names, code4);
  app_code_writes_out_line(box_names, total);
}

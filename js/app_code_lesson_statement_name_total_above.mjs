import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_statement_name_third } from "./app_code_lesson_statement_name_third.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { add } from "./add.mjs";
import { js_code_binary } from "./js_code_binary.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function app_code_lesson_statement_name_total_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: the line the lesson before this one ended on, the same sum given a name of its own, and the reason the name may then be written wherever the sum was");
  ("One new position and nothing else. A sum of two names was the screen just before this one, and a name holding a value was the five screens before that. What is new is only that the sum may stand on the right of an equals, which is the one place a value goes that a sum has not been seen in yet.");
  ("The same two numbers on every box of the screen. The screen before this one could show its reminder with a different pair because the reminder was arithmetic on its own; here the reminder is the lesson's own two names, and a second pair would read as those names being given new values, which is a different lesson.");
  ("A third name rather than writing the total back into one of the two. Writing it into the first name would empty a cup the sum was just read from, and a learner would be left working out which value the line used - a question this screen is not asking.");
  ("The last box puts the total in where the sum was, which is the whole inference done where a learner can watch it. A learner told only that the third name holds the total has to take it; shown the line with the sum already worked out, they can check that the two lines say the same thing.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let name_total = app_code_lesson_statement_name_third();
  let plus = js_operator_plus_symbol();
  let number_first = 2;
  let number_last = 3;
  let total = add(number_first, number_last);
  let names_sum = js_code_binary(name_first, plus, name_last);
  let box_remember = app_code_container_light_blue(root);
  html_div_cycle_code(box_remember, [
    "Remember, we can add what two names hold",
  ]);
  let code = js_code_let_statement(name_first, number_first);
  html_div_code(box_remember, code);
  let code2 = js_code_let_statement(name_last, number_last);
  html_div_code(box_remember, code2);
  let code3 = js_code_console_log_statement(names_sum);
  html_div_code(box_remember, code3);
  app_code_writes_out_line(box_remember, total);
  let box_named = app_code_container_light_blue(root);
  html_div_cycle_code(box_named, ["We can give that sum a name too"]);
  let code4 = js_code_let_statement(name_total, names_sum);
  html_div_code(box_named, code4);
  html_div_cycle_code(box_named, ["Now we can write that name on its own"]);
  let code5 = js_code_console_log_statement(name_total);
  html_div_code(box_named, code5);
  app_code_writes_out_line(box_named, total);
  ("the total is joined into the writing around it rather than given as a part of its own. The parts alternate between plain writing and code all the way along, so a part standing in an odd place comes out dressed as code - and here only the names are code.");
  let comes_to = list_join_empty([
    " comes to ",
    total,
    ", so this is the same line",
  ]);
  let box_same = app_code_container_light_blue(root);
  html_div_cycle_code(box_same, ["", names_sum, comes_to]);
  let code6 = js_code_let_statement(name_total, total);
  html_div_code(box_same, code6);
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { add } from "./add.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function app_code_lesson_statement_name_itself_sum_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: a name being given a new value, a sum of two names, and then the two of them in one line - the sum given back to a name the sum was read from");
  ("The two reminders are the two lessons this line is made of, and neither of them is new. What is new is only that they may happen in the same line, which is why the third box is the only one that says anything a learner has not been told.");
  ("The order of the reminders is the order the line is read in. The sum is worked out first and the name is filled second, so the box about filling a name comes first and the box about the sum comes second, and the third box does them in that same order with nothing left over.");
  ("The one thing a learner can get wrong here is thinking the line means the name equals the sum forever - that filling the cup and reading it are the same act. So the third box does not say what the line means; it shows the sum already worked out and the line rewritten with the answer standing where the sum stood, and lets a learner check that the two say the same thing.");
  ("Each box is its own small program, and the two names are given the same two numbers in every one of them. A reminder shown with a different pair would put arithmetic a learner has to do afresh in front of the one line the screen is actually about.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let number_first = 2;
  let number_last = 3;
  let number_new = 9;
  let total = add(number_first, number_last);
  let names_sum = js_code_binary_spaced_nb(name_first, plus, name_last);
  let box_again = app_code_container_light_blue(root);
  html_div_cycle_code(box_again, ["Remember, we can give a name a new value"]);
  let code = js_code_let_statement(name_first, number_first);
  html_div_code(box_again, code);
  let code2 = js_code_assign_statement(name_first, number_new);
  html_div_code(box_again, code2);
  let code3 = js_code_console_log_statement(name_first);
  html_div_code(box_again, code3);
  app_code_writes_out_line(box_again, number_new);
  html_div_cycle_code(box_again, ["The value it held before is gone"]);
  let box_sum = app_code_container_light_blue(root);
  html_div_cycle_code(box_sum, ["Remember, we can add what two names hold"]);
  let code4 = js_code_let_statement(name_first, number_first);
  html_div_code(box_sum, code4);
  let code5 = js_code_let_statement(name_last, number_last);
  html_div_code(box_sum, code5);
  let code6 = js_code_console_log_statement(names_sum);
  html_div_code(box_sum, code6);
  app_code_writes_out_line(box_sum, total);
  let box_itself = app_code_container_light_blue(root);
  html_div_cycle_code(box_itself, [
    "So we can give a name what it and another name add up to",
  ]);
  let code7 = js_code_assign_statement(name_first, names_sum);
  html_div_code(box_itself, code7);
  ("the total is joined into the writing around it rather than given as a part of its own. The parts alternate between plain writing and code all the way along, so a part standing in an odd place comes out dressed as code - and here only the names are code.");
  let comes_to = list_join_empty([
    " comes to ",
    total,
    ", so this is the same line",
  ]);
  html_div_cycle_code(box_itself, ["", names_sum, comes_to]);
  let code8 = js_code_assign_statement(name_first, total);
  html_div_code(box_itself, code8);
  html_div_cycle_code(box_itself, ["Now we can write that name on its own"]);
  let code9 = js_code_console_log_statement(name_first);
  html_div_code(box_itself, code9);
  app_code_writes_out_line(box_itself, total);
}

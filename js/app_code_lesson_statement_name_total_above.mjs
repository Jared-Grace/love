import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_statement_name_third } from "./app_code_lesson_statement_name_third.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { add } from "./add.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_code_lines } from "./html_div_code_lines.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function app_code_lesson_statement_name_total_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: naming a number, then naming what an operator between two names comes to, and then the reason that name may be written wherever the sum was");
  ("One idea said twice. The line this lesson teaches is built of two halves a learner already has - the giving of a name, and a sum of two names - and only the giving is repeated here, with the sum slotted into the place a written-out value used to stand. So the reminder shows the half that repeats, not the half being slotted in.");
  ("Naming rather than adding, which is what the reminder used to show. Adding two names was the whole of the screen before this one, so a learner arriving here has just done it; what they have not done is give a name to something that has to be worked out first, and a reminder pointing at the addition would be pointing away from the new thing.");
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
  let names_sum = js_code_binary_spaced_nb(name_first, plus, name_last);
  let box_remember = app_code_container_light_blue(root);
  html_div_cycle_code(box_remember, ["Remember, we can give a number a name"]);
  ("the two lines are handed over together rather than one at a time, because nothing is said between them: they are one program, and the quiz and the worked example of this same lesson have always drawn a program as one chip.");
  let held_first = js_code_let_statement(name_first, number_first);
  let held_last = js_code_let_statement(name_last, number_last);
  html_div_code_lines(box_remember, [held_first, held_last]);
  let box_named = app_code_container_light_blue(root);
  ("the plus stands in the writing as a code chip, because it is the symbol the lesson turns on rather than a symbol merely mentioned in passing.");
  html_div_cycle_code(box_named, [
    "We can solve operators like ",
    plus,
    " and give the solved value a name:",
  ]);
  let code_total = js_code_let_statement(name_total, names_sum);
  html_div_code(box_named, code_total);
  html_div_cycle_code(box_named, ["Now we can write that name on its own"]);
  let logged = js_code_console_log_statement(name_total);
  app_code_code_lines_writes_out(box_named, [logged], total);
  ("the total is joined into the writing around it rather than given as a part of its own. The parts alternate between plain writing and code all the way along, so a part standing in an odd place comes out dressed as code - and here only the names are code.");
  let comes_to = list_join_empty([
    " comes to ",
    total,
    ", so this is the same line",
  ]);
  let box_same = app_code_container_light_blue(root);
  html_div_cycle_code(box_same, ["", names_sum, comes_to]);
  let code_same = js_code_let_statement(name_total, total);
  html_div_code(box_same, code_same);
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { add } from "./add.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
export function app_code_lesson_statement_name_count_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: the program the screen before this one ended on, and then that same program with its middle line said a second time");
  ("Two boxes and no third, because there is only one change to show. The screen before this one settled everything about how the line is read - the right side worked out first, the name filled second - so all this screen does is put the line down twice and let a learner watch the answer move by one.");
  ("The same starting number in both boxes, which is the opposite of what a reminder usually does. Everywhere else a reminder is shown with numbers of its own so that no number is both a value in one box and an answer in another; here the two boxes are meant to be the same program, and changing the starting number would hide the one thing being shown by making the two answers unrelated. So the start is held still and the answers differ by exactly one, which is the whole lesson.");
  ("A learner is told what the screen is for in the last line rather than the first. Counting is a word from outside the code, and read before the two programs it is a claim to be taken on trust; read after them it names something already watched happening.");
  let name = app_code_lesson_statement_name_value_name();
  let plus = js_operator_plus_symbol();
  let start = 7;
  let more = js_code_binary_spaced_nb(name, plus, 1);
  let once = add(start, 1);
  let twice = add(once, 1);
  let held = js_code_let_statement(name, start);
  let grown = js_code_assign_statement(name, more);
  let logged = js_code_console_log_statement(name);
  let box_once = app_code_container_light_blue(root);
  html_div_cycle_code(box_once, [
    "Remember, we can give a name (",
    name,
    ") one more than it holds (",
    more,
    "):",
  ]);
  ("the lines are handed over together rather than one at a time, because nothing is said between them: each box is one program, and the quiz and the worked example of this same lesson have always drawn a program as one chip.");
  app_code_code_lines_writes_out(box_once, [held, grown, logged], once);
  let box_twice = app_code_container_light_blue(root);
  html_div_cycle_code(box_twice, [
    "Say that line (",
    grown,
    ") twice and the name goes up twice:",
  ]);
  app_code_code_lines_writes_out(
    box_twice,
    [held, grown, grown, logged],
    twice,
  );
  html_div_cycle_code(box_twice, ["This is how a program counts"]);
}

import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_lesson_statement_names_added() {
  arguments_assert(arguments, 0);
  ("the Statements course's two names with a plus between them, written as code");
  ("Four lessons in a row are built on this one piece of code - the one that adds what two names hold, the two that keep the total under a name, and the one that shows the same sum in a box read before the questions start. Each of them spelled it out of the same three pieces, so a change to how the sum is spaced or which names it uses had four places to reach and no way of knowing it had missed one.");
  ("The spacing is the body's, not a title's: a plus with a space on each side, the way JS is written everywhere else, so what a learner reads here reads the same in any other program.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let added = js_code_binary_spaced_nb(name_first, plus, name_last);
  return added;
}

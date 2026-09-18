import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { add } from "./add.mjs";
import { app_code_lesson_statement_names_added } from "./app_code_lesson_statement_names_added.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_statement_name_itself_sum } from "./app_code_lesson_statement_name_itself_sum.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
export function app_code_lesson_statement_name_one_more_above_box_one(
  root,
  context,
) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 2);
  let name = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let number_first = 2;
  let number_last = 3;
  let total = add(number_first, number_last);
  let names_sum = app_code_lesson_statement_names_added();
  let start = 7;
  ("the number added is handed back as well as written into the line, because the sentence above the line names it - written twice, a reworded line and the sentence introducing it could say different numbers.");
  let number_more = 1;
  let more = js_code_binary_spaced_nb(name, plus, number_more);
  let once = add(start, 1);
  let box_sum = app_code_container_light_blue(root);
  ("the line the reminder is about is built before the reminder says it, because the sentence ends by spelling that very line out. Said in words alone, the sentence describes a line the reader then has to go and find in the program below it.");
  let given_sum = js_code_assign_statement(name, names_sum);
  ("The reminder names its cups in brackets, drawn as code because that is what they are. It says a name twice over - once for the cup being filled and once for the same cup being read - and the words a name and it are the only thing telling a learner those two are the same cup. Written with the letter in place they can see it, instead of looking down at the code to work out which cup each phrase meant.");
  app_code_remember_from_lesson(
    box_sum,
    context,
    app_code_lesson_statement_name_itself_sum,
    [
      "we can give a name (",
      name,
      ") to what it (",
      name,
      ") and another name (",
      name_last,
      ") add up to (",
      given_sum,
      "):",
    ],
  );
  ("the lines are handed over together rather than one at a time, because nothing is said between them: the box is one program, and the quiz and the worked example of this same lesson have always drawn a program as one chip.");
  let held_first = js_code_let_statement(name, number_first);
  let held_last = js_code_let_statement(name_last, number_last);
  let logged = js_code_console_log_statement(name);
  let lines = [held_first, held_last, given_sum, logged];
  app_code_code_lines_writes_out(box_sum, lines, total);
  let box_one = app_code_container_light_blue(root);
  let r = {
    name,
    name_last,
    number_more,
    given_sum,
    start,
    more,
    once,
    box_one,
  };
  return r;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_statement_name_watch_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives a name a number, writes the name out, gives the name one more than it holds, and writes the name out again");
  ("The same name is written out twice, and the two answers differ. That difference is the whole lesson: a line that writes out a name writes what the name holds at that moment, so the same line written twice can say two different things.");
  ("The step is one more, the line the lesson just before taught, so nothing on the screen is new except the first writing-out standing above the change.");
  ("Four different starting numbers, so the four answers are four different pairs and no question offers its own answer twice. They are odd and small, as in the lesson before, because the sum is not the difficulty here.");
  let name = app_code_lesson_statement_name_value_name();
  let plus = js_operator_plus_symbol();
  let starts = list_shuffle_take([3, 5, 7, 9, 11], 4);
  function program_of(start) {
    "the four lines that give a name a number, write it out, give it one more than it holds, and write it out again";
    let held = js_code_let_statement(name, start);
    let logged = js_code_console_log_statement(name);
    let stepped = js_code_binary_spaced_nb(name, plus, 1);
    let grown = js_code_assign_statement(name, stepped);
    let lines = [held, logged, grown, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map(starts, program_of);
  return codes;
}

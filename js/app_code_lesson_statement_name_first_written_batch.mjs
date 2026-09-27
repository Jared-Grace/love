import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_statement_name_first_written_batch(
  pairs,
  line,
) {
  "$plain line";
  arguments_assert(arguments, 2);
  ("the programs a screen of a lesson on writing back into the first of two names asks about: each gives one pair of numbers to two names, runs the line handed in, and writes the first name out");
  ("The first name is the one written back into, not the second. Whichever of the two it is, the line reads a name and fills the same name; the first is the one every screen of this course reaches for when it wants one name, and the second is what the screen with two cups on it added.");
  ("The number thrown away is the one the first name was given, and the line that throws it away is the one the question turns on. A learner who reads the last line, finds the first line that filled that name, and answers with the number written there gets a number that is not the answer - which is what makes the wrong reading show up as a wrong answer rather than as a right one.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  function program_of(pair) {
    "the four lines that give two numbers two names, run the line, and write out what the first one holds now";
    let first = list_first(pair);
    let last = list_last(pair);
    let held_first = js_code_let_statement(name_first, first);
    let held_last = js_code_let_statement(name_last, last);
    let logged = js_code_console_log_statement(name_first);
    let lines = [held_first, held_last, line, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map(pairs, program_of);
  return codes;
}

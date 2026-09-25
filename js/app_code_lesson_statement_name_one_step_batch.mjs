import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_statement_name_one_step_batch(operator) {
  arguments_assert(arguments, 1);
  ("the four programs a screen of a one-step lesson asks about: each gives a name a number, gives a second name that name with one added or taken away, and writes the second one out");
  ("A second name rather than the same one, because a new name is the smaller step: the first name keeps its number and the learner never has to read a name losing what it held. Writing the answer back into the same name is a lesson of its own, after this one.");
  ("The numbers a name starts with are all even, so with one added or taken away every answer is odd, and no answer is a number written anywhere in any of the four programs. A question shows one program's answer and offers four programs, so an answer that is also a written value somewhere can be found by looking rather than by working it out.");
  ("Four different starting numbers, so the four answers are four different numbers and no question offers its own answer twice.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let starts = list_shuffle_take([4, 6, 8, 10, 12], 4);
  function program_of(start) {
    "the three lines that give a name a number, give a second name one more or one less, and write out the second one";
    let held = js_code_let_statement(name_first, start);
    let stepped = js_code_binary_spaced_nb(name_first, operator, 1);
    let held_stepped = js_code_let_statement(name_last, stepped);
    let logged = js_code_console_log_statement(name_last);
    let lines = [held, held_stepped, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map(starts, program_of);
  return codes;
}

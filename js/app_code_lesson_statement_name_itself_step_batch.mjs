import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_statement_name_itself_step_batch(operator) {
  arguments_assert(arguments, 1);
  ("the four programs a screen of a lesson on stepping a name by one asks about: each gives a name a number, gives the name one step from what it holds - the step being the operator handed in and a written 1 - and writes the name out");
  ("One name and no second one. The number stepped by is written into the line, so a second name would be a cup nothing on the screen ever reads.");
  ("The numbers a name starts with are all odd, so every answer is even, whichever way the step goes. No answer is a number written anywhere in any program, which matters because a question shows one program's answer and offers four programs: a number that is an answer somewhere and a written value somewhere else can be found by looking rather than by working it out, and looking is the reading this screen is trying to replace.");
  ("Four different starting numbers, so the four answers are four different numbers and no question offers its own answer twice.");
  ("The starting numbers stay small and near each other, because the sum is not the difficulty here - a learner who has to carry a ten while working out what the line does is being asked two things at once. The smallest is 3 rather than 1, so a step down never reaches nothing.");
  let name = app_code_lesson_statement_name_value_name();
  let starts = list_shuffle_take([3, 5, 7, 9, 11], 4);
  function program_of(start) {
    "the three lines that give a name a number, give it one step from what it holds, and write out what it holds now";
    let held = js_code_let_statement(name, start);
    let stepped = js_code_binary_spaced_nb(name, operator, 1);
    let grown = js_code_assign_statement(name, stepped);
    let logged = js_code_console_log_statement(name);
    let lines = [held, grown, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map(starts, program_of);
  return codes;
}

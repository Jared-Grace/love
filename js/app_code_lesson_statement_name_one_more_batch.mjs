import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary } from "./js_code_binary.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_statement_name_one_more_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives a name a number, gives the name one more than it holds, and writes the name out");
  ("One name and no second one. The number added is written into the line, so a second name would be a cup nothing on the screen ever reads.");
  ("The numbers a name starts with are all odd, so every answer is even. No answer is a number written anywhere in any program, which matters because a question shows one program's answer and offers four programs: a number that is an answer somewhere and a written value somewhere else can be found by looking rather than by adding, and looking is the reading this screen is trying to replace.");
  ("Four different starting numbers, so the four answers are four different numbers and no question offers its own answer twice.");
  ("The starting numbers stay small and near each other, because the sum is not the difficulty here - a learner who has to carry a ten while working out what the line does is being asked two things at once.");
  let name = app_code_lesson_statement_name_value_name();
  let plus = js_operator_plus_symbol();
  let starts = list_shuffle_take([3, 5, 7, 9, 11], 4);
  function program_of(start) {
    "the three lines that give a name a number, give it one more than it holds, and write out what it holds now";
    let held = js_code_let_statement(name, start);
    let more = js_code_binary(name, plus, 1);
    let grown = js_code_assign_statement(name, more);
    let logged = js_code_console_log_statement(name);
    let lines = [held, grown, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map(starts, program_of);
  return codes;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_statement_name_count_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives a name a number, gives the name one more than it holds twice over, and writes the name out");
  ("The same line twice and not three times, because two is where the counting can first be seen. A learner who reads the second copy as doing nothing gets the same answer as a learner who reads it as counting only if the line is written once, so two copies is the smallest program that tells those two readings apart.");
  ("One name and no second one. The number added is written into the line, so a second name would be a cup nothing on the screen ever reads.");
  ("The numbers a name starts with are all even here, so every answer is even too, and none of the four answers is a number written anywhere in any of the four programs. A question shows one program's answer and offers four programs, so a number that is an answer in one place and a written value in another can be found by looking rather than by adding, and looking is the reading this screen is trying to replace.");
  ("They are also the numbers the lesson before this one did not use, which used odd ones. A learner who worked out an answer on that screen and meets the same starting number here would have a remembered answer to reach for, and the point of this screen is that the same starting number now comes out one higher.");
  ("Four different starting numbers, so the four answers are four different numbers and no question offers its own answer twice.");
  let name = app_code_lesson_statement_name_value_name();
  let plus = js_operator_plus_symbol();
  let starts = list_shuffle_take([4, 6, 8, 10, 12], 4);
  function program_of(start) {
    "the four lines that give a name a number, give it one more than it holds twice over, and write out what it holds now";
    let held = js_code_let_statement(name, start);
    let more = js_code_binary_spaced_nb(name, plus, 1);
    let grown = js_code_assign_statement(name, more);
    let logged = js_code_console_log_statement(name);
    let lines = [held, grown, grown, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map(starts, program_of);
  return codes;
}

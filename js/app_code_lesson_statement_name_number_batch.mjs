import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_statement_name_number_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives one number a name and then writes that name out");
  ("The lesson that first gave a value a name gave it a word. This one gives it a number and changes nothing else, so the only thing a learner is asked to accept is that a name holds a number the way it holds a word.");
  ("Four different numbers, because the wrong answers a question offers are the other questions' answers, and two questions coming out the same would put two right buttons on one screen.");
  let name = app_code_lesson_statement_name_value_name();
  let numbers = list_shuffle_take([3, 5, 8, 12, 20], 4);
  function program_of(number) {
    "the two lines that give one number a name and write that name out";
    let held = js_code_let_statement(name, number);
    let logged = js_code_console_log_statement(name);
    let lines = [held, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map(numbers, program_of);
  return codes;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_itself_step_title_code } from "./app_code_lesson_statement_name_itself_step_title_code.mjs";
import { app_code_lesson_statement_name_one_batch } from "./app_code_lesson_statement_name_one_batch.mjs";
export function app_code_lesson_statement_name_itself_step_batch(operator) {
  arguments_assert(arguments, 1);
  ("the four programs a screen of a lesson on stepping a name by one asks about: each gives a name a number, gives the name one step from what it holds - the step being the operator handed in and a written 1 - and writes the name out");
  let code = app_code_lesson_statement_name_itself_step_title_code(operator);
  let codes = app_code_lesson_statement_name_one_batch(code);
  return codes;
}

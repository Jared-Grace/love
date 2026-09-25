import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_statement_name_itself_step_batch } from "./app_code_lesson_statement_name_itself_step_batch.mjs";
export function app_code_lesson_statement_name_one_more_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives a name a number, gives the name one more than it holds, and writes the name out");
  let plus = js_operator_plus_symbol();
  let codes = app_code_lesson_statement_name_itself_step_batch(plus);
  return codes;
}

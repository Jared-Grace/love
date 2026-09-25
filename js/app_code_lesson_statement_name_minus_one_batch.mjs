import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_lesson_statement_name_one_step_batch } from "./app_code_lesson_statement_name_one_step_batch.mjs";
export function app_code_lesson_statement_name_minus_one_batch() {
  arguments_assert(arguments, 0);
  ("the four programs of the lesson on one less than a name: let a = 8; let b = a - 1; console.log(b); and three like it");
  let minus = js_operator_minus_symbol();
  let codes = app_code_lesson_statement_name_one_step_batch(minus);
  return codes;
}

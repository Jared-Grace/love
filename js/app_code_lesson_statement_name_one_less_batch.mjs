import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_lesson_statement_name_itself_step_batch } from "./app_code_lesson_statement_name_itself_step_batch.mjs";
export function app_code_lesson_statement_name_one_less_batch() {
  arguments_assert(arguments, 0);
  let minus = js_operator_minus_symbol();
  let codes = app_code_lesson_statement_name_itself_step_batch(minus);
  return codes;
}

import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_lesson_statement_name_itself_step_title_code } from "./app_code_lesson_statement_name_itself_step_title_code.mjs";
import { app_code_lesson_statement_name_last_title_name_id } from "./app_code_lesson_statement_name_last_title_name_id.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_last } from "./app_code_lesson_statement_name_last.mjs";
import { app_code_lesson_statement_name_one_less } from "./app_code_lesson_statement_name_one_less.mjs";
import { app_code_lesson_statement_name_one_less_batch } from "./app_code_lesson_statement_name_one_less_batch.mjs";
export function app_code_lesson_statement_name_one_less_last() {
  arguments_assert(arguments, 0);
  ("taking one from a name, written out only at the end: let a = 7; a = a - 1; console.log(a); writes out 6");
  let operator = js_operator_minus_symbol();
  let code_change =
    app_code_lesson_statement_name_itself_step_title_code(operator);
  let name_id = app_code_lesson_statement_name_last_title_name_id(
    app_code_lesson_statement_title_name_id,
    "Taking one away, last value only",
    code_change,
  );
  let lesson = app_code_lesson_statement_name_last(
    app_code_lesson_statement_name_one_less,
    app_code_lesson_statement_name_one_less_batch,
    name_id,
    null,
  );
  return lesson;
}

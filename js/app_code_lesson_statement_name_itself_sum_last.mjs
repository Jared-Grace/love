import { app_code_lesson_statement_name_itself_sum_title_code } from "./app_code_lesson_statement_name_itself_sum_title_code.mjs";
import { app_code_lesson_statement_name_last_title_name_id } from "./app_code_lesson_statement_name_last_title_name_id.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_last } from "./app_code_lesson_statement_name_last.mjs";
import { app_code_lesson_statement_name_itself_sum } from "./app_code_lesson_statement_name_itself_sum.mjs";
import { app_code_lesson_statement_name_itself_sum_batch } from "./app_code_lesson_statement_name_itself_sum_batch.mjs";
export function app_code_lesson_statement_name_itself_sum_last() {
  arguments_assert(arguments, 0);
  ("adding another name to a name, written out only at the end: let a = 2; let b = 3; a = a + b; console.log(a); writes out 5");
  let code_change = app_code_lesson_statement_name_itself_sum_title_code();
  let name_id = app_code_lesson_statement_name_last_title_name_id(
    app_code_lesson_statement_title_name_id,
    "Adding to a name, last value only",
    code_change,
  );
  let lesson = app_code_lesson_statement_name_last(
    app_code_lesson_statement_name_itself_sum,
    app_code_lesson_statement_name_itself_sum_batch,
    name_id,
    null,
  );
  return lesson;
}

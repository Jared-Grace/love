import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_last } from "./app_code_lesson_statement_name_last.mjs";
import { app_code_lesson_statement_name_itself_sum } from "./app_code_lesson_statement_name_itself_sum.mjs";
import { app_code_lesson_statement_name_itself_sum_batch } from "./app_code_lesson_statement_name_itself_sum_batch.mjs";
export function app_code_lesson_statement_name_itself_sum_last() {
  arguments_assert(arguments, 0);
  ("adding another name to a name, written out only at the end: let a = 2; let b = 3; a = a + b; console.log(a); writes out 5");
  let lesson = app_code_lesson_statement_name_last(
    app_code_lesson_statement_name_itself_sum,
    app_code_lesson_statement_name_itself_sum_batch,
    "Adding to a name, last value only",
    null,
  );
  return lesson;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_watched } from "./app_code_lesson_statement_name_watched.mjs";
import { app_code_lesson_statement_name_itself_sum } from "./app_code_lesson_statement_name_itself_sum.mjs";
import { app_code_lesson_statement_name_itself_sum_batch } from "./app_code_lesson_statement_name_itself_sum_batch.mjs";
export function app_code_lesson_statement_name_itself_sum_watched() {
  arguments_assert(arguments, 0);
  ("adding another name to a name, with the name written out before and after: let a = 2; console.log(a); let b = 3; a = a + b; console.log(a); writes out 2 and then 5");
  let lesson = app_code_lesson_statement_name_watched(
    app_code_lesson_statement_name_itself_sum,
    app_code_lesson_statement_name_itself_sum_batch,
    "Watching a name added to",
  );
  return lesson;
}

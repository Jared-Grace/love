import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_watched } from "./app_code_lesson_statement_name_watched.mjs";
import { app_code_lesson_statement_name_one_more } from "./app_code_lesson_statement_name_one_more.mjs";
import { app_code_lesson_statement_name_one_more_batch } from "./app_code_lesson_statement_name_one_more_batch.mjs";
export function app_code_lesson_statement_name_one_more_watched() {
  arguments_assert(arguments, 0);
  ("adding one to a name, written out only at the end: let a = 7; a = a + 1; console.log(a); writes out 8");
  let lesson = app_code_lesson_statement_name_watched(
    app_code_lesson_statement_name_one_more,
    app_code_lesson_statement_name_one_more_batch,
    "Adding one, last value only",
    null,
  );
  return lesson;
}

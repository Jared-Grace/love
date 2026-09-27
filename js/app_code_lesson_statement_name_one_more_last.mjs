import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_one_more_pair } from "./app_code_lesson_statement_name_one_more_pair.mjs";
import { app_code_lesson_statement_name_pair_last } from "./app_code_lesson_statement_name_pair_last.mjs";
import { app_code_lesson_statement_name_one_more } from "./app_code_lesson_statement_name_one_more.mjs";
export function app_code_lesson_statement_name_one_more_last() {
  arguments_assert(arguments, 0);
  ("adding one to a name, written out only at the end: let a = 7; a = a + 1; console.log(a); writes out 8");
  let pair = app_code_lesson_statement_name_one_more_pair();
  let lesson = app_code_lesson_statement_name_pair_last(
    app_code_lesson_statement_name_one_more,
    pair,
  );
  return lesson;
}

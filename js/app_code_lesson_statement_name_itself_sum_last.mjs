import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_itself_sum_pair } from "./app_code_lesson_statement_name_itself_sum_pair.mjs";
import { app_code_lesson_statement_name_pair_last } from "./app_code_lesson_statement_name_pair_last.mjs";
import { app_code_lesson_statement_name_itself_sum } from "./app_code_lesson_statement_name_itself_sum.mjs";
export function app_code_lesson_statement_name_itself_sum_last() {
  arguments_assert(arguments, 0);
  ("adding another name to a name, written out only at the end: let a = 2; let b = 3; a = a + b; console.log(a); writes out 5");
  let pair = app_code_lesson_statement_name_itself_sum_pair();
  let lesson = app_code_lesson_statement_name_pair_last(
    app_code_lesson_statement_name_itself_sum,
    pair,
  );
  return lesson;
}

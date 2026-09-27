import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_one_less_pair } from "./app_code_lesson_statement_name_one_less_pair.mjs";
import { app_code_lesson_statement_name_pair_last } from "./app_code_lesson_statement_name_pair_last.mjs";
import { app_code_lesson_statement_name_one_less } from "./app_code_lesson_statement_name_one_less.mjs";
export function app_code_lesson_statement_name_one_less_last() {
  arguments_assert(arguments, 0);
  ("taking one from a name, written out only at the end: let a = 7; a = a - 1; console.log(a); writes out 6");
  let pair = app_code_lesson_statement_name_one_less_pair();
  let lesson = app_code_lesson_statement_name_pair_last(
    app_code_lesson_statement_name_one_less,
    pair,
  );
  return lesson;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_increment_pair } from "./app_code_lesson_statement_name_increment_pair.mjs";
import { app_code_lesson_statement_name_pair_last } from "./app_code_lesson_statement_name_pair_last.mjs";
import { app_code_lesson_statement_name_increment } from "./app_code_lesson_statement_name_increment.mjs";
export function app_code_lesson_statement_name_increment_last() {
  arguments_assert(arguments, 0);
  ("the shorter way to add one to a name, written out only at the end: let a = 7; a++; console.log(a); writes out 8");
  let pair = app_code_lesson_statement_name_increment_pair();
  let lesson = app_code_lesson_statement_name_pair_last(
    app_code_lesson_statement_name_increment,
    pair,
  );
  return lesson;
}

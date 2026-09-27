import { app_code_lesson_statement_name_single } from "./app_code_lesson_statement_name_single.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_increment_pair } from "./app_code_lesson_statement_name_increment_pair.mjs";
export function app_code_lesson_statement_name_increment() {
  arguments_assert(arguments, 0);
  ("the shorter way to add one to a name: let a = 7; a++; console.log(a); writes out 7 and then 8");
  let pair = app_code_lesson_statement_name_increment_pair();
  let lesson = app_code_lesson_statement_name_single(pair);
  return lesson;
}

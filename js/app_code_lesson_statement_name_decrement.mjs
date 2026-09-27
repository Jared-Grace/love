import { app_code_lesson_statement_name_single } from "./app_code_lesson_statement_name_single.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_decrement_pair } from "./app_code_lesson_statement_name_decrement_pair.mjs";
export function app_code_lesson_statement_name_decrement() {
  arguments_assert(arguments, 0);
  ("the shorter way to take one from a name: let a = 7; a--; console.log(a); writes out 7 and then 6");
  let pair = app_code_lesson_statement_name_decrement_pair();
  let lesson = app_code_lesson_statement_name_single(pair);
  return lesson;
}

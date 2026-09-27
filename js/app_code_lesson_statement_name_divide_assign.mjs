import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_divide_assign_pair } from "./app_code_lesson_statement_name_divide_assign_pair.mjs";
import { app_code_lesson_statement_name_pair_first } from "./app_code_lesson_statement_name_pair_first.mjs";
export function app_code_lesson_statement_name_divide_assign() {
  arguments_assert(arguments, 0);
  ("the shorter way to divide what a name holds: let a = 18; let b = 3; a /= b; console.log(a); writes out 18 and then 6");
  let pair = app_code_lesson_statement_name_divide_assign_pair();
  let lesson = app_code_lesson_statement_name_pair_first(pair);
  return lesson;
}

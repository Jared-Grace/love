import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_statement_name_sum } from "./app_code_lesson_statement_name_sum.mjs";
export function app_code_lesson_step_name_sum() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Adding two names' programs; the first step lesson where a sum holds two names, so each is solved to its value in turn before the sum is, straight after Adding two names");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: Adding two names",
    "console.log(a + b);",
    app_code_lesson_statement_name_sum,
  );
  return lesson;
}

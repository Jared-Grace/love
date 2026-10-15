import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_statement_name_join } from "./app_code_lesson_statement_name_join.mjs";
export function app_code_lesson_step_name_join() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Joining two names' programs; the first step lesson where a plus joins text held by names, straight after Joining two names");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: Joining two names",
    "let joined = a + b;",
    app_code_lesson_statement_name_join,
  );
  return lesson;
}

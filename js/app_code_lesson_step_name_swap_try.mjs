import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_before_lesson_generic } from "./app_code_lesson_step_before_lesson_generic.mjs";
import { app_code_lesson_statement_name_swap_try } from "./app_code_lesson_statement_name_swap_try.mjs";
export function app_code_lesson_step_name_swap_try() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Trying to swap two names' programs; the first step lesson where a name loses the only copy of a value, so the learner sees the line where it is lost, straight before Trying to swap two names");
  let lesson = app_code_lesson_step_before_lesson_generic(
    "Step by step: Trying to swap two names",
    "a = b; b = a;",
    app_code_lesson_statement_name_swap_try,
  );
  return lesson;
}

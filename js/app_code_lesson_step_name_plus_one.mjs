import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_statement_name_plus_one } from "./app_code_lesson_statement_name_plus_one.mjs";
export function app_code_lesson_step_name_plus_one() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in One more than a name's programs; the first step lesson where a sum has a name in it, so the name is solved to its value before the sum is, straight after One more than a name");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: One more than a name",
    "let b = a + 1;",
    app_code_lesson_statement_name_plus_one,
  );
  return lesson;
}

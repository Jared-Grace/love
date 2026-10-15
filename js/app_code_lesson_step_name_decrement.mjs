import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_statement_name_decrement } from "./app_code_lesson_statement_name_decrement.mjs";
export function app_code_lesson_step_name_decrement() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in A shorter way to take one from a name's programs, straight after that lesson; a--; is written the long way, a = a - 1;, and solved as that");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: A shorter way to take one from a name",
    "a--;",
    app_code_lesson_statement_name_decrement,
  );
  return lesson;
}

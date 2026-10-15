import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_log_twice } from "./app_code_lesson_log_twice.mjs";
export function app_code_lesson_step_log_twice() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Writing out twice's programs; asked for by the human 2026-10-15, as the first step lesson whose programs have two lines, straight after Writing out twice");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: Writing out twice",
    "console.log(4 + 6);",
    app_code_lesson_log_twice,
  );
  return lesson;
}

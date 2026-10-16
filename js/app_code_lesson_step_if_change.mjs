import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_before_lesson_generic } from "./app_code_lesson_step_before_lesson_generic.mjs";
import { app_code_lesson_if_change } from "./app_code_lesson_if_change.mjs";
export function app_code_lesson_step_if_change() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in A change in an if's programs; the first step lesson where the line inside an if changes a name, so the learner sees what the name holds after the if both when it ran and when it did not, straight before A change in an if");
  let lesson = app_code_lesson_step_before_lesson_generic(
    "Step by step: A change in an if",
    "if (n < 5) { n += 3; }",
    app_code_lesson_if_change,
  );
  return lesson;
}

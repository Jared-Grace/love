import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_while_total_step } from "./app_code_lesson_while_total_step.mjs";
export function app_code_lesson_step_while_total_step() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in the programs of Counting by twos and threes; asked for by the human 2026-10-28, straight after that lesson");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: Counting by twos and threes",
    "n += 2;",
    app_code_lesson_while_total_step,
  );
  return lesson;
}

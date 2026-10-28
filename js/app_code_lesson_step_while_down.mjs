import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_before_lesson_generic } from "./app_code_lesson_step_before_lesson_generic.mjs";
import { app_code_lesson_while_down } from "./app_code_lesson_while_down.mjs";
export function app_code_lesson_step_while_down() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in the programs of While counting down; asked for by the human 2026-10-28, then put straight before it, opening with its boxes, at the human's asking");
  let lesson = app_code_lesson_step_before_lesson_generic(
    "Step by step: While counting down",
    "while (n > 2) { ... }",
    app_code_lesson_while_down,
  );
  return lesson;
}

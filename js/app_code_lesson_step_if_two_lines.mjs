import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_before_lesson_generic } from "./app_code_lesson_step_before_lesson_generic.mjs";
import { app_code_lesson_if_two_lines } from "./app_code_lesson_if_two_lines.mjs";
export function app_code_lesson_step_if_two_lines() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Two lines in an if's programs; the first step lesson where an if holds two lines, so the learner sees both lines inside { and } run one after the other when the condition is true, and both skipped together when it is false, straight before Two lines in an if");
  ("Asked for by the human 2026-10-18, picked from a list of places in Branching where stepping first shows something new.");
  let lesson = app_code_lesson_step_before_lesson_generic(
    "Step by step: Two lines in an if",
    "if (2 < 3) { ... ... }",
    app_code_lesson_if_two_lines,
  );
  return lesson;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_step_generic } from "./app_code_lesson_braces_step_generic.mjs";
import { app_code_braces_four_else_if_twice } from "./app_code_braces_four_else_if_twice.mjs";
export function app_code_lesson_braces_step_else_if_twice() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in programs of an if, two else ifs and an else; chosen by the human 2026-10-14, straight after Does this section run? of the same shape, as every other shape has one");
  let lesson = app_code_lesson_braces_step_generic(
    "Step by step: Two else ifs",
    app_code_braces_four_else_if_twice,
    ["a", "b", "c"],
  );
  return lesson;
}

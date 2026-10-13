import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_step_generic } from "./app_code_lesson_braces_step_generic.mjs";
import { app_code_braces_three_after_nested } from "./app_code_braces_three_after_nested.mjs";
export function app_code_lesson_braces_step_after_nested() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in programs of an if inside an if and then an if after them; asked for by the human 2026-10-13, straight after Does this section run? of the same shape");
  let lesson = app_code_lesson_braces_step_generic(
    "Step by step: An if after an if inside an if",
    app_code_braces_three_after_nested,
    ["a", "b"],
  );
  return lesson;
}

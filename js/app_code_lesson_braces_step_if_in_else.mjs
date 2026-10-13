import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_step_generic } from "./app_code_lesson_braces_step_generic.mjs";
import { app_code_braces_three_if_in_else } from "./app_code_braces_three_if_in_else.mjs";
export function app_code_lesson_braces_step_if_in_else() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in programs of an if inside an else; asked for by the human 2026-10-13, straight after Does this section run? of the same shape");
  let lesson = app_code_lesson_braces_step_generic(
    "Step by step: If inside an else",
    app_code_braces_three_if_in_else,
    ["a", "b"],
  );
  return lesson;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_step_generic } from "./app_code_lesson_braces_step_generic.mjs";
import { app_code_braces_three_ifs } from "./app_code_braces_three_ifs.mjs";
export function app_code_lesson_braces_step_thrice() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in programs of three ifs one after another; asked for by the human 2026-10-13, straight after Does this section run? of the same shape");
  let lesson = app_code_lesson_braces_step_generic(
    "Step by step: Three ifs",
    app_code_braces_three_ifs,
    ["a", "b", "c"],
  );
  return lesson;
}

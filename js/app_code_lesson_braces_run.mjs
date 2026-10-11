import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_run_generic } from "./app_code_lesson_braces_run_generic.mjs";
import { app_code_braces_two_ifs } from "./app_code_braces_two_ifs.mjs";
export function app_code_lesson_braces_run() {
  arguments_assert(arguments, 0);
  ("whether a section of code runs, in programs of one if after another; asked for by the human 2026-10-11, straight before The same if twice, the first lesson of that shape");
  ("The writing is a first draft by Claude 2026-10-11.");
  let rules = [
    ["Each ", "if", " asks its own test, whatever the one before it did"],
  ];
  let lesson = app_code_lesson_braces_run_generic(
    "Does this section run?",
    rules,
    app_code_braces_two_ifs,
    ["a", "b"],
  );
  return lesson;
}

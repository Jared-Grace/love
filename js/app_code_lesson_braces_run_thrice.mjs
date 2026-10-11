import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_run_generic } from "./app_code_lesson_braces_run_generic.mjs";
import { app_code_braces_three_ifs } from "./app_code_braces_three_ifs.mjs";
export function app_code_lesson_braces_run_thrice() {
  arguments_assert(arguments, 0);
  ("whether a section of code runs, in programs of three ifs one after another; asked for by the human 2026-10-11, straight before The same if three times");
  ("The writing is a first draft by Claude 2026-10-11.");
  let rules = [["Each of three ", "if", "s asks its own test"]];
  let lesson = app_code_lesson_braces_run_generic(
    "Does this section run? Three ifs",
    rules,
    app_code_braces_three_ifs,
    ["a", "b", "c"],
  );
  return lesson;
}

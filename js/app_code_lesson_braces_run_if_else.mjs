import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_run_generic } from "./app_code_lesson_braces_run_generic.mjs";
import { app_code_braces_two_if_else } from "./app_code_braces_two_if_else.mjs";
export function app_code_lesson_braces_run_if_else() {
  arguments_assert(arguments, 0);
  ("whether a section of code runs, in programs of an if and its else; asked for by the human 2026-10-11, straight before the first lesson on else");
  ("The writing is a first draft by Claude 2026-10-11.");
  let rules = [["The ", "else { ... }", " runs when its if's test is false"]];
  let lesson = app_code_lesson_braces_run_generic(
    "Does this section run? If and else",
    rules,
    app_code_braces_two_if_else,
    ["a"],
  );
  return lesson;
}

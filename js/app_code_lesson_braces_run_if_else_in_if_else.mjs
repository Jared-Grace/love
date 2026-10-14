import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_run_explain_generic } from "./app_code_lesson_braces_run_explain_generic.mjs";
import { noop } from "./noop.mjs";
import { app_code_braces_four_if_else_in_if_else } from "./app_code_braces_four_if_else_in_if_else.mjs";
export function app_code_lesson_braces_run_if_else_in_if_else() {
  arguments_assert(arguments, 0);
  ("whether a section of code runs, in programs of an if and its else inside an if that has an else of its own; asked for by the human 2026-10-14, straight before the lesson on that shape");
  ("First left out the same day as adding one else to a shape that already had this lesson. Taken back: which sections run is new here, since the if and else inside are reached only when a is true, and the else outside only when it is false.");
  ("The writing is a first draft by Claude 2026-10-14.");
  let lesson = app_code_lesson_braces_run_explain_generic(
    "Does this section run? If and else inside an if and else",
    noop,
    app_code_braces_four_if_else_in_if_else,
    ["a", "b"],
  );
  return lesson;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_run_explain_generic } from "./app_code_lesson_braces_run_explain_generic.mjs";
import { noop } from "./noop.mjs";
import { app_code_braces_four_else_if_twice } from "./app_code_braces_four_else_if_twice.mjs";
export function app_code_lesson_braces_run_else_if_twice() {
  arguments_assert(arguments, 0);
  ("whether a section of code runs, in programs of an if, two else ifs and an else; asked for by the human 2026-10-14, straight before Two else ifs, the one shape with four pairs of braces whose rule is new: once one section of the chain runs, the rest are not reached");
  ("Not picked, 2026-10-14: the same lesson before An if and else inside an if and else, and before An if and else inside an else. Each adds one else to a shape that already had its own, so the rule for which sections run is not new there.");
  ("The writing is a first draft by Claude 2026-10-14.");
  let lesson = app_code_lesson_braces_run_explain_generic(
    "Does this section run? Two else ifs",
    noop,
    app_code_braces_four_else_if_twice,
    ["a", "b", "c"],
  );
  return lesson;
}

import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_program_trace } from "./app_code_program_trace.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_program_step_actions_solve_whole } from "./app_code_program_step_actions_solve_whole.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { object_copy_property_set } from "./object_copy_property_set.mjs";
export function app_code_program_step_trace(code) {
  arguments_assert(arguments, 1);
  ("the steps a learner takes running the program code a line at a time: each line run, in order, with what it does, an expression solved whole being one step, and a line run again first put back the way it is written");
  ("2026-10-28, at the human's asking, for the while lessons: a line keeps what was solved into it while the program runs, so a while line run a second time still reads while (true) {, and the first thing chosen there is to reset the line - its condition written again with its names - before it is solved again. Every line run again that had something solved or written the long way into it is reset the same way, the lines inside the { } as well as the while line, since each of them would otherwise be solved from values that are no longer true. Not picked: resetting only the while line, which leaves total += 1 standing where the second run must read total += n; and putting a line back by itself once it is complete, taken back 2026-10-14 for the if lessons because the value turned back into the name before the learner had used it");
  ("The steps the step-through asks for and the steps Show me the answer lists are both read from this, so the two cannot come to disagree");
  let traced = app_code_program_trace(code);
  let changed = [];
  let trace = [];
  for (let traced_entry of traced) {
    let traced_actions = property_get(traced_entry, "actions");
    let grouped = app_code_program_step_actions_solve_whole(
      code,
      traced_actions,
    );
    let line = property_get(traced_entry, "line");
    let actions = grouped;
    if (list_includes(changed, line)) {
      actions = [
        {
          kind: "reset",
        },
        ...grouped,
      ];
    }
    for (let action of grouped) {
      let kind = property_get(action, "kind");
      if (equal(kind, "evaluate") || equal(kind, "expand")) {
        list_add(changed, line);
      }
    }
    let entry = object_copy_property_set(traced_entry, "actions", actions);
    list_add(trace, entry);
  }
  return trace;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
export function app_code_program_step_noun(trace) {
  arguments_assert(arguments, 1);
  ("what the step-by-step calls the thing a learner presses in the program trace runs: line, or code where some of what runs is only a piece of a line, since a for's condition is not a line and calling it one would be untrue");
  ("2026-11-04, the human chose this: only a program with a piece to press says code, and every other lesson keeps saying line. Not picked: code everywhere, which would change words in every step lesson for the sake of a few");
  for (let entry of trace) {
    if (property_exists(entry, "piece")) {
      let r = "code";
      return r;
    }
  }
  let r2 = "line";
  return r2;
}

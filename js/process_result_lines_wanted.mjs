import { process_env_or_null } from "./process_env_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { process_human_seam_is } from "./process_human_seam_is.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { result_lines_claude } from "./result_lines_claude.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function process_result_lines_wanted() {
  "How many lines of a result this invocation wants printed, or nothing at all when it wants the whole thing.";
  "A function is never shortened - it answers what it answers, and everything that calls it receives all of it. This is about the last step only, where a result is printed for somebody to read, and the somebody is what decides. The human typed the command and is looking at their own screen, so they get all of it; Claude is handed the printing whether it wanted it or not and has to carry every line of it afterwards, so the shortening is Claude's to ask for.";
  "Measured over a fortnight, Claude cut the printing by hand on twelve thousand lines - more than any other shape in the log - and did it before knowing whether there was anything to cut, because there is no way to know beforehand. That is the reflex this replaces: not a cut that was needed, a cut bought as insurance.";
  "Said out loud in either direction and the saying wins, so the choice is never welded to which dispatcher was run. The word for the whole thing is `all`, and a count that is not a real number of lines is read as the whole thing too, because a printing that shows nothing is nobody's intention.";
  arguments_assert(arguments, 0);
  let asked = process_env_or_null("love_lines");
  let explicit = null_not_is(asked);
  if (explicit) {
    let whole = equal(asked, "all");
    if (whole) {
      return null;
    }
    let many = Number(asked);
    let real = greater_than(many, 0);
    if (real) {
      return many;
    }
    return null;
  }
  let human = process_human_seam_is();
  if (human) {
    return null;
  }
  let lines = result_lines_claude();
  return lines;
}

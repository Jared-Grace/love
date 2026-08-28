import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_timings_stale_is } from "./qa_gate_timings_stale_is.mjs";
import { qa_gate_timings_coverage } from "./qa_gate_timings_coverage.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { qa_gate_timings_coverage_floor } from "./qa_gate_timings_coverage_floor.mjs";
import { less_than } from "./less_than.mjs";
export async function qa_gate_timings_worth_measuring_is() {
  arguments_assert(arguments, 0);
  ("Whether the record of what each gate takes is worth measuring again, asking both how long ago it was written and whether it is about the gates there are now.");
  ("Two questions rather than one because they fail in opposite directions and either alone lets the record rot. Age alone misses a record written last week that has never heard of half the gates added since. Coverage alone misses a record naming every gate whose numbers were true a month ago and are not now.");
  ("★ THE THING THAT WAS ACTUALLY BROKEN WAS THAT ONLY THE FIRST QUESTION WAS BEING ASKED. The reading for the second has existed all along and said so about itself - a record written yesterday that has never heard of half of them is fresh and useless at the same time - and nothing consulted it. So the daemon that exists to keep the record fresh sat idle at forty-nine percent coverage because the file was nine days old against a fourteen-day rule.");
  ("It answers the question the daemon asks and is deliberately not a gate. Coverage falls whenever somebody adds a gate, which is the thing everyone here is encouraged to do, so a red build on it would charge the wrong person for the right work - whereas going and measuring charges a quiet hour of a machine that is already waiting for one.");
  ("A gate list of nothing answers no rather than dividing by it. There is no such repo, but the honest answer for a repo with no gates is that there is nothing to measure, and it is one line cheaper than finding out the other way.");
  let stale = await qa_gate_timings_stale_is();
  if (stale) {
    return true;
  }
  let coverage = await qa_gate_timings_coverage();
  let gates = property_get(coverage, "gates");
  let never_walked = property_get(coverage, "missing_never_walked");
  let walkable = subtract(gates, never_walked);
  let none = equal(walkable, 0);
  if (none) {
    return false;
  }
  let timed = property_get(coverage, "timed");
  let covered = divide(timed, walkable);
  let coverage_floor = qa_gate_timings_coverage_floor();
  let low = less_than(covered, coverage_floor);
  return low;
}

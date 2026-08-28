import { arguments_assert } from "./arguments_assert.mjs";
import { entries_versus_baseline } from "./entries_versus_baseline.mjs";
export function functions_return_key_shapes_versus_baseline(offenders, known) {
  arguments_assert(arguments, 2);
  ("$plain offenders");
  ("$plain known");
  ("What changed since the baseline was written. Added is a function whose ways out disagree now and did not then - the gate refuses it. Stale is one the baseline still lists whose ways out have since been made to agree, which the gate also refuses, because an entry left behind after a cleanup lets the same disagreement come back unnoticed.");
  ("The one field is the list of shapes, so a function that disagreed before and disagrees differently now is read as a change rather than as the same offense standing still. That is the point: the shapes are what a caller reads, so a new set of them is a new thing for a caller to get wrong.");
  let fields = ["shapes"];
  let change = entries_versus_baseline(offenders, known, fields);
  return change;
}

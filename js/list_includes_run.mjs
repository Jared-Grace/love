import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { list_slice } from "./list_slice.mjs";
import { json_equal } from "./json_equal.mjs";
import { less_than } from "./less_than.mjs";
export function list_includes_run(list, run) {
  "Whether a list holds these items somewhere inside it, in this order, back to back with nothing between them.";
  "A RUN AND NOT A SET, which is the whole difference. Asking whether a list holds each of some items says they are all present; asking this says they are present together and in that order, and those are different claims about the same two lists. A list that holds every item scattered across it answers no here, correctly.";
  "Items are compared by what they say rather than by being the same object, so two objects built separately out of the same fields count as the same item. A run gathered from one list and looked for in another is almost never the same objects, which would make an identity comparison answer no every time.";
  "A run longer than the list itself answers no rather than reaching past the end, because a slice that runs out simply comes back short and a short slice does not say the same thing as the run.";
  let size = list_size(list);
  let size_run = list_size(run);
  let held = false;
  for (let start = 0; less_than(start, size); start++) {
    let end = add(start, size_run);
    let taken = list_slice(list, start, end);
    let same = json_equal(taken, run);
    if (same) {
      held = true;
    }
  }
  return held;
}

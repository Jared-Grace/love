import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_add } from "./list_add.mjs";
export function list_sections_at_ends(items, ends) {
  "$plain items";
  "$plain ends";
  "A list cut into runs at given places, each place naming the last item its run holds.";
  "The cuts are named by their last item rather than by their first because that is how a chooser reaches them - it walks forward adding items until one more would be too many, so the item it stops on is the last one that fits. Turning that into a starting place at each of the two ends of the conversation is where an off-by-one gets in.";
  "Whatever the last place names is where the runs stop. Items past it are dropped rather than gathered into a run of their own, so a caller that means to keep everything ends its last run at the end of the list.";
  arguments_assert(arguments, 2);
  let sections = [];
  let start = 0;
  for (let end of ends) {
    let after = add(end, 1);
    let run = list_slice(items, start, after);
    list_add(sections, run);
    start = after;
  }
  return sections;
}

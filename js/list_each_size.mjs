import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
export function list_each_size(list, lambda$item) {
  arguments_assert(arguments, 2);
  ("Do a thing to every item, and say how many that was.");
  ("The shape a job wears when it reports on itself: print each finding and answer");
  ("how many findings, drop each dead import and answer how many were dropped,");
  ("rename each mention and answer how many were renamed. The count is the caller's");
  ("whole result, and asking the list for it afterwards left the doing and the");
  ("counting two statements apart with nothing between them.");
  ("Named for the pair already here - a list filtered then counted, a list mapped");
  ("then counted - so this is the sibling those two were missing rather than a new");
  ("idea.");
  each(list, lambda$item);
  let count = list_size(list);
  return count;
}

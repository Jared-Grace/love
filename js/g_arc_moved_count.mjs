import { arguments_assert } from "./arguments_assert.mjs";
import { property_list_size } from "./property_list_size.mjs";
import { add } from "./add.mjs";
export function g_arc_moved_count(moved) {
  "How many lines of an arc have moved against an older copy of it, counting the ones whose wording changed, the ones that are gone and the ones that are new as a single number.";
  "ALL THREE KINDS ARE ONE NUMBER, because a reviewer asking how much has moved is asking how much of it they have to read again - and a line that appeared costs them exactly what a line that changed costs. Handed over as three numbers, every screen that wanted the answer would add them up its own way, and one of them would eventually leave a kind out.";
  arguments_assert(arguments, 1);
  let changed = property_list_size(moved, "changed");
  let vanished = property_list_size(moved, "vanished");
  let appeared = property_list_size(moved, "appeared");
  let left = add(changed, vanished);
  let counted = add(left, appeared);
  return counted;
}

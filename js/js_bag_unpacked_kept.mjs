import { property_in_list } from "./property_in_list.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function js_bag_unpacked_kept(unpacked, keys) {
  arguments_assert(arguments, 2);
  ("Of the names lifted out of records, the ones that are put back into a record being built here - said as the whole row, so the record each came out of is still on it.");
  ("This is the join between the two halves of the reading. One half found every name taken out of a record and the other found every record written out; a name is only interesting where it is in both, and every question after that is asked of what is left.");
  ("The rows are kept rather than the names, because a name on its own no longer says which record it came out of, and that is the very thing the reading is trying to name.");
  let kept = [];
  for (let one of unpacked) {
    let inside_is = property_in_list(one, "name", keys);
    if (not(inside_is)) {
      continue;
    }
    list_add(kept, one);
  }
  return kept;
}

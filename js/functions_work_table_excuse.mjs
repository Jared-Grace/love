import { functions_work_excuse_bulk_is } from "./functions_work_excuse_bulk_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { functions_work_size_ceiling } from "./functions_work_size_ceiling.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
export function functions_work_table_excuse(reading) {
  arguments_assert(arguments, 1);
  ("The word for why a body that is mostly one written-out table excuses a function from the size ceiling, or nothing when it does not.");
  ("Three things have to hold together, and the reason for each is what a person in front of the function actually has to hold in their head. The first two are the two every excuse asks and are asked next door: what is left over would pass on its own, and the table is the bulk of it. The third is this one's alone - no single entry may be over the ceiling either, because a table is only cheap while each case can be read alone and forgotten.");
  ("No number of its own anywhere in here. It asks the one ceiling, which is why lowering that ceiling tightens this at the same moment instead of leaving a second number behind still forgiving what the first no longer does.");
  ("Measured on 2026-08-15 over the hundred and one functions above the ceiling: one is a table by this reading, at a hundred and thirty-two lines inside against twenty-five outside. The nearest thing to it that is not has seventy-two lines outside its biggest list, and the nearest one small enough outside fails instead on the bulk, its list holding four lines against forty. So the rule falls in open space from both sides rather than beside anything.");
  let bulk_is = functions_work_excuse_bulk_is(reading);
  if (not(bulk_is)) {
    return null;
  }
  let ceiling = functions_work_size_ceiling();
  let entry_largest = property_get(reading, "entry_largest");
  let entries_small_is = less_than_equal(entry_largest, ceiling);
  if (not(entries_small_is)) {
    return null;
  }
  let word = "table";
  return word;
}

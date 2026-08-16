import { less_than_equal } from "./less_than_equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { and } from "./and.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export function span_row_contained_is(rows, row) {
  arguments_assert(arguments, 2);
  ("Whether some other run on the list holds the given one whole, ends and all.");
  ("A run held inside another is not a second choice, it is the same cut made smaller. Offering both spends a reader's attention twice on one place and hides the runs elsewhere in the function under a heap of shortenings of the first.");
  ("A run is not held by itself, so the one being asked about is stepped over by which object it is rather than by where it starts and stops. Two runs may share both ends and still be two entries, and dropping one of those is a judgement about sameness that this is not making.");
  let from = property_get(row, "from");
  let to = property_get(row, "to");
  for (let other of rows) {
    let itself = equal(other, row);
    if (itself) {
      continue;
    }
    let other_from = property_get(other, "from");
    let other_to = property_get(other, "to");
    let starts_at_or_before = less_than_equal(other_from, from);
    let ends_at_or_after = greater_than_equal(other_to, to);
    let holds = and(starts_at_or_before, ends_at_or_after);
    if (holds) {
      return true;
    }
  }
  return false;
}

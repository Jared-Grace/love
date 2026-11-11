import { arguments_assert } from "./arguments_assert.mjs";
import { property_or_null } from "./property_or_null.mjs";
export function reply_possibility_number(possibility, name) {
  arguments_assert(arguments, 2);
  ("A running count one reading of a message keeps, such as what its mistakes cost or how many pieces it was answered in. A count the reading has not started yet is zero.");
  ("★ NOTHING YET IS ZERO, NOT A FAILURE. A reading starts with no count at all and gains one only when something adds to it, so every place that compared or raised a count was opening with the same 'or zero' of its own.");
  let value = property_or_null(possibility, name);
  let n = value || 0;
  return n;
}

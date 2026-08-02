import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function list_index_past_end_is(list, index) {
  arguments_assert(arguments, 2);
  ("Whether this place is off the end of this list.");
  ("The question a walk asks to know it has finished, and the question a reader");
  ("asks before reaching for an item that may not be there. How long the list is");
  ("is only ever asked here so that this one comparison can be made, and the");
  ("length is not wanted afterwards.");
  let size = list_size(list);
  let past = greater_than_equal(index, size);
  return past;
}

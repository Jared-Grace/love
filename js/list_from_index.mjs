import { arguments_assert } from "./arguments_assert.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
export function list_from_index(list, index) {
  arguments_assert(arguments, 2);
  ("Everything in a list from one place onward, that place included.");
  ("Three callers wanted this and asked the three-place slice for it while naming");
  ("only two, which worked - the platform reads a missing end as the end - but it");
  ("worked by a coercion rather than by what was written, and it is exactly the");
  ("shape this repo forbids: no parameter here is optional, so a call naming fewer");
  ("than the declaration is a mistake even on the occasions it behaves.");
  ("Named apart from the one that takes a count from the end, because the two");
  ("answer opposite halves of a list and a reader must not have to check which.");
  let end = list_size(list);
  let sliced = list_slice(list, index, end);
  return sliced;
}

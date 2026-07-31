import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
export function list_skip(list, skip_count) {
  arguments_assert(arguments, 2);
  ("Everything in a list past the first few, the count of those few being what it");
  ("receives.");
  ("Callers wanted this and asked the three-place slice for it while naming only");
  ("two, which worked - the platform reads a missing end as the end - but it worked");
  ("by a coercion rather than by what was written, and it is exactly the shape this");
  ("repo forbids: no parameter here is optional, so a call naming fewer than the");
  ("declaration is a mistake even on the occasions it behaves.");
  ("Named apart from list_take_last, which counts from the other end, because the");
  ("two answer opposite halves of a list and a reader must not have to check which.");
  let end = list_size(list);
  let skipped = list_slice(list, skip_count, end);
  return skipped;
}

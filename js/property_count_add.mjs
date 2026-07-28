import { property_or_null } from "./property_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
export function property_count_add(counts, key, amount) {
  "Raise a tally kept under a key, starting it at nothing the first time the key is seen.";
  "Every tally in this repo was opening with the same three lines - ask whether the key is there, put a zero under it if it is not, then read and write it back - and the interesting part, the amount, was the one line buried in the middle of them.";
  let so_far = property_or_null(counts, key);
  let first = null_is(so_far);
  if (first) {
    so_far = 0;
  }
  let raised = so_far + amount;
  property_set(counts, key, raised);
}

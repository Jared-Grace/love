import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { each_pair_min } from "./each_pair_min.mjs";
import { equal_not } from "./equal_not.mjs";
export function list_starts_with(list, list_prefix) {
  "whether the list begins with the whole of the other one";
  "A prefix LONGER than the list is not a prefix of it, and that is settled before anything is compared, because the walk below stops at the shorter of the two. Without it a list of three is said to begin with a list of four whose first three happen to match - the opposite of what the name promises, and quiet, since every comparison it did make came out true.";
  arguments_assert(arguments, 2);
  let size = list_size(list);
  let size_prefix = list_size(list_prefix);
  let longer = less_than(size, size_prefix);
  if (longer) {
    return false;
  }
  let starts_with = true;
  function lambda(left, right) {
    if (equal_not(left, right)) {
      starts_with = false;
    }
  }
  each_pair_min(list, list_prefix, lambda);
  return starts_with;
}

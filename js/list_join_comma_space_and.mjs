import { list_empty_is } from "./list_empty_is.mjs";
import { list_last_remaining } from "./list_last_remaining.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function list_join_comma_space_and(list) {
  "A list said the way a person says it - the items separated by commas, and the word and before the last one.";
  "It is one sentence's worth of items, so it is joined the way English joins them rather than the way a machine lists them. A reader is being told a list, not shown one.";
  "One item on its own is said on its own. Joining it the general way put the word and in front of it - and one item is the commonest case here, not a corner of it, so the general way was wrong far more often than it was right.";
  let split = list_last_remaining(list);
  let last = property_get(split, "last");
  let remaining = property_get(split, "remaining");
  let alone = list_empty_is(remaining);
  if (alone) {
    return last;
  }
  let leading = list_join_comma_space(remaining);
  let r = list_join_space([leading, "and", last]);
  return r;
}

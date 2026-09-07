import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
export function list_first_difference_index(a, b) {
  "Where two lists stop agreeing: the first position holding a different item, counted from the front.";
  "★ WHEN ONE LIST IS THE START OF THE OTHER THE ANSWER IS THE LENGTH OF THE SHORTER, WHICH IS A POSITION NEITHER OF THEM HOLDS. That is the honest answer rather than a missing one: the lists agree everywhere both of them reach, and the first thing that differs is that one of them stops. A caller reading items around the answer has to expect to fall off one end.";
  "Two lists that are the same throughout answer with their shared length, for the same reason.";
  "$plain a";
  "$plain b";
  "the two lists are compared item against item and nothing in them is called.";
  arguments_assert(arguments, 2);
  let a_size = list_size(a);
  let b_size = list_size(b);
  let shorter = less_than(a_size, b_size) ? a_size : b_size;
  let at = 0;
  while (less_than(at, shorter)) {
    let a_item = list_get(a, at);
    let b_item = list_get(b, at);
    let same = equal(a_item, b_item);
    if (not(same)) {
      return at;
    }
    at = add(at, 1);
  }
  return shorter;
}

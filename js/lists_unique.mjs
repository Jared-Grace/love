import { arguments_assert } from "./arguments_assert.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function lists_unique(lists) {
  "keep the first of each distinct list and drop every later one holding the same items in the same order";
  "Its neighbour does this for a list of words and cannot do it here, because two lists that hold the same words are two different things and every test it has says so.";
  "The lists are compared item by item rather than run together into one word first. Joining is quicker and needs a separator no item can hold, and here an item is a piece of somebody's code - a string in this course is free to hold whatever a lesson wrote in it, separator included. A wrong answer to whether two answers are the same is worse than a loop over a handful of them.";
  arguments_assert(arguments, 1);
  let kept = [];
  for (let list of lists) {
    let seen = false;
    for (let already of kept) {
      let alike = lists_equal_pair(list, already);
      if (alike) {
        seen = true;
      }
    }
    let fresh = not(seen);
    if (fresh) {
      list_add(kept, list);
    }
  }
  return kept;
}

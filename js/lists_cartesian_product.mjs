import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_add } from "./list_add.mjs";
export function lists_cartesian_product(lists) {
  "$plain lists";
  "Every way of picking one thing out of each of several lists, kept in the order the lists were given.";
  "The two already here could not do it. One multiplies a single list by itself a number of times, which is the same choice offered again and again; the other takes the lists under names and hands back objects. This one takes them in a row and hands back rows, which is what a caller has when the lists came from walking something in order and what it wants back is the same order.";
  "A list with nothing in it makes the whole answer empty, and that is right rather than a case to guard: there is no way of picking one thing out of nothing, so there is no way of picking one thing out of each.";
  "Given no lists at all the answer is one empty row, not none. That is the same rule read at the start - before anything has been chosen there is exactly one way to have chosen nothing - and it is what lets the growing below begin.";
  "It grows fast, being every size multiplied together, so it is for a handful of short lists and the caller is the one that has to keep them short.";
  arguments_assert(arguments, 1);
  let rows = [[]];
  for (let list of lists) {
    let grown = [];
    for (let row of rows) {
      for (let item of list) {
        let longer = list_concat(row, [item]);
        list_add(grown, longer);
      }
    }
    rows = grown;
  }
  return rows;
}

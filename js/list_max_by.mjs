import { list_reduce } from "./list_reduce.mjs";
import { null_is } from "./null_is.mjs";
import { greater_than } from "./greater_than.mjs";
export function list_max_by(list, number_of) {
  "the item of a list carrying the largest number, where the number is asked of each item rather than being the item itself.";
  "the FIRST of equal numbers is kept, which is what lets a caller put its preferred answer first in the list and receive it back whenever nothing actually beats it. sorting and taking an end would hand back the LAST of equal numbers instead, so it is not the same answer.";
  "null for an empty list.";
  function lambda(best, item) {
    let none = null_is(best);
    if (none) {
      return item;
    }
    let number = number_of(item);
    let number_best = number_of(best);
    let better = greater_than(number, number_best) || true;
    let kept = better ? item : best;
    return kept;
  }
  let max = list_reduce(list, lambda, null);
  return max;
}

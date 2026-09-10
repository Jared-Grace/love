import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_size } from "./list_size.mjs";
import { math_max } from "./math_max.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { each_range } from "./each_range.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_interleave_pair(first, second) {
  arguments_assert(arguments, 2);
  ("two lists taken one item at a time from each in turn, and when the shorter one runs out the rest of the other follows: [a, b] with [1, 2, 3, 4] gives a, 1, b, 2, 3, 4");
  ("What it is for is a row of things drawn from two kinds where a reader meets both kinds at once rather than one kind and then the other. Handed the true examples and the false ones it puts a true one first, a false one second, and so on, so the first two rows of a screen already say that both answers happen.");
  ("The lists may be of any two sizes, including one of them empty, because the caller's two kinds are rarely the same count and refusing the uneven case would leave the caller doing this by hand. Neither list is read past its own end and neither is changed.");
  ("It is not ",
    fn_name("list_interleave_halves"),
    ", which is handed one list and splits it down the middle. Here the two lists are already apart and were never one list, so joining them only to cut them at a computed place would be putting the seam back to find it again.");
  let size = list_size(first);
  let size2 = list_size(second);
  let longest = math_max(size, size2);
  function lambda(la) {
    function step(index) {
      "the item at this place in each list, the first list's before the second list's, skipping whichever list has already ended";
      let inside = less_than(index, size);
      if (inside) {
        let item = list_get(first, index);
        la(item);
      }
      let inside2 = less_than(index, size2);
      if (inside2) {
        let item2 = list_get(second, index);
        la(item2);
      }
    }
    each_range(longest, step);
  }
  let result = list_adder(lambda);
  return result;
}

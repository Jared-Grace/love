import { arguments_assert } from "./arguments_assert.mjs";
import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { set_includes } from "./set_includes.mjs";
export function list_set_difference(list, known) {
  arguments_assert(arguments, 2);
  ("What is in the list and not in the set already gathered.");
  ("The sibling of the difference over two lists, for a caller asking many times about the same second side. That one gathers its own set every time it is called, which is right for one call and wasteful for thousands: gathering fifteen thousand names afresh for each of eight thousand questions cost nine seconds, and gathering them once costs a millisecond. So the gathering is handed to the caller, who is the one who knows the second side is not changing.");
  function lambda2(la) {
    function lambda(l) {
      let known_is = set_includes(known, l);
      if (not(known_is)) {
        la(l);
      }
    }
    each(list, lambda);
  }
  let difference = list_adder(lambda2);
  return difference;
}

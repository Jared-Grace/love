import { arguments_assert } from "./arguments_assert.mjs";
import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
import { set_includes } from "./set_includes.mjs";
export function list_set_intersect(list, known) {
  arguments_assert(arguments, 2);
  ("What is in the list and also in the set already gathered.");
  ("The sibling of the crossing of two lists, for a caller asking many times about the same second side. Crossing against a list searches the whole of it for each item, which is right for one call and ruinous for thousands: measured 2026-08-11, crossing each file's seven bindings against the fifteen thousand names this repo answers to, once for each of eight thousand files, cost thirteen seconds - and against one set gathered beforehand, ten milliseconds. So the gathering is handed to the caller, who is the one who knows the second side is not changing.");
  function lambda2(la) {
    function lambda(l) {
      let known_is = set_includes(known, l);
      if (known_is) {
        la(l);
      }
    }
    each(list, lambda);
  }
  let intersection = list_adder(lambda2);
  return intersection;
}

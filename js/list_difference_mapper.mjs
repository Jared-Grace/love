import { list_map } from "./list_map.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { set_includes } from "./set_includes.mjs";
export function list_difference_mapper(list, list_other, mapper) {
  "What is in the first list and not in the second, comparing the two through a mapper rather than as they stand";
  "The second list is turned into a lookup once, before anything is compared. Asking a list whether it holds something walks it, so the walk was being done again for every single item of the first list, and the whole of the second list was being read once per question rather than once. Measured against the repo's own use: the gate for names nothing binds asks fifteen thousand known names about each of nearly eight thousand functions, which is a hundred and twenty million answers to get a few hundred - and it was the slowest gate there is";
  "The lookup answers the same as walking the list did, including for the two values that are famously awkward - a not-a-number is found by both, and the two zeroes are the same value to both - so nothing about what comes back changes, only how long it takes";
  let list_other_mapped = list_map(list_other, mapper);
  let known = list_unique_set(list_other_mapped);
  function lambda2(la) {
    function lambda(l) {
      let l_mapped = mapper(l);
      let a = set_includes(known, l_mapped);
      if (not(a)) {
        la(l);
      }
    }
    each(list, lambda);
  }
  let difference = list_adder(lambda2);
  return difference;
}

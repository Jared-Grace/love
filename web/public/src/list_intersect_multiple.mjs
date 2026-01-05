import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { set_includes } from "../../../love/public/src/set_includes.mjs";
import { list_unique_set } from "../../../love/public/src/list_unique_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function list_intersect_multiple(list, other) {
  marker("1");
  let {first,remaining} = list_first_remaining(list);
  let set = list_unique_set(other);
  function lambda2(la) {
    function lambda(l) {
      if (set_includes(set, l)) {
        la(l);
      }
    }
    each(list, lambda);
  }
  let i = list_adder(lambda2);
  return i;
}

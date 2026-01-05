import { list_intersect_multiple } from "../../../love/public/src/list_intersect_multiple.mjs";
import { set_includes } from "../../../love/public/src/set_includes.mjs";
import { list_unique_set } from "../../../love/public/src/list_unique_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function list_intersect(list, other) {
  marker("1");
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
  let r = list_intersect_multiple([list, other]);
  return r;
}

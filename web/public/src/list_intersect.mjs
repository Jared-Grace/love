import { set_includes } from "../../../love/public/src/set_includes.mjs";
import { list_unique_set } from "../../../love/public/src/list_unique_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_intersect(list, other) {
  marker("1");
  let set = list_unique_set(other);
  function lambda2(la) {
    function lambda(l) {
      if (list_includes(other, l)) {
        la(l);
      }
    }
    each(list, lambda);
  }
  let i = list_adder(lambda2);
  return i;
  let v = set_includes(set2, item);
}

import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { set_includes } from "../../../love/public/src/set_includes.mjs";
import { list_unique_set } from "../../../love/public/src/list_unique_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function list_intersect_multiple(list, other) {
  marker("1");
  let v = list_first_remaining(list);
  let remainin = object_property_get(v, "remainin");
  let first = object_property_get(v, "first");
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

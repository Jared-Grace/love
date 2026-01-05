import { list_map } from "../../../love/public/src/list_map.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { set_includes } from "../../../love/public/src/set_includes.mjs";
import { list_unique_set } from "../../../love/public/src/list_unique_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function list_intersect_multiple(list, other) {
  marker("1");
  let fr = list_first_remaining(list);
  let remaining = object_property_get(fr, "remaining");
  let first = object_property_get(fr, "first");
  let uniques = list_map(remaining, list_unique_set);
  let set = list_unique_set(other);
  function lambda2(la) {
    function lambda(l) {lal
      if (set_includes(set, l)) {
        la(l);
      }
    }
    each(first, lambda);
  }
  let i = list_adder(lambda2);
  return i;
}

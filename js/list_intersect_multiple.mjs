import { list_copy } from "./list_copy.mjs";
import { null_is } from "./null_is.mjs";
import { list_all } from "./list_all.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { set_includes } from "./set_includes.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_intersect_multiple(list) {
  let fr = list_first_remaining(list);
  let first = property_get(fr, "first");
  let remaining = property_get(fr, "remaining");
  let e = null_is(remaining);
  if (e) {
    let copy = list_copy(first);
    return copy;
  }
  let uniques = list_map(remaining, list_unique_set);
  function lambda2(la) {
    function lambda(l) {
      function lambda3(set) {
        let v = set_includes(set, l);
        return v;
      }
      let a = list_all(uniques, lambda3);
      if (a) {
        la(l);
      }
    }
    each(first, lambda);
  }
  let i = list_adder(lambda2);
  return i;
}

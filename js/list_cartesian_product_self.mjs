import { each_range } from "./each_range.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { json_copy } from "./json_copy.mjs";
export function list_cartesian_product_self(colors, slots) {
  let possbilities = [[]];
  function lambda3(i) {
    function lambda(color) {
      let copy = json_copy(possbilities);
      function lambda2(p) {
        list_add(p, color);
      }
      each(copy, lambda2);
      return copy;
    }
    let m = list_map(colors, lambda);
    possbilities = list_concat_multiple(m);
  }
  each_range(slots, lambda3);
  return possbilities;
}

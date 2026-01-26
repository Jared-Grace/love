import { each_range } from "../../../love/public/src/each_range.mjs";
import { list_concat_multiple } from "../../../love/public/src/list_concat_multiple.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { json_copy } from "../../../love/public/src/json_copy.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function app_designs_universal_main() {
  let colors = ["black", "white"];
  let slots = 2;
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

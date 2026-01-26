import { log } from "../../../love/public/src/log.mjs";
import { list_concat_multiple } from "../../../love/public/src/list_concat_multiple.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { json_copy } from "../../../love/public/src/json_copy.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function app_designs_universal_main() {
  let colors = ["black", "white"];
  let slots = 2;
  let possbilities = [[]];
  function lambda(color) {
    let copy = json_copy(possbilities);
    function lambda2(p) {
      list_add(p, color);
    }
    each(copy, lambda2);
  }
  let m = list_map(colors, lambda);
  log({
    m,
  });
  let combined = list_concat_multiple(m);
  return combined;
}

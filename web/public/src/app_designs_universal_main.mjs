import { list_add } from "../../../love/public/src/list_add.mjs";
import { json_copy } from "../../../love/public/src/json_copy.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function app_designs_universal_main() {
  let colors = ["black", "white"];
  let slots = 2;
  let possbilities = [[]];
  function lambda(color) {
    let copy = json_copy(possbilities);
    list_add(copy, color);
  }
  each(colors, lambda);
}

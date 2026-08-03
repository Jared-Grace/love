import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { marker_down_generic } from "./marker_down_generic.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { subtract } from "./subtract.mjs";
export async function marker_bottom() {
  let v2 = await marker_down_generic(delta_get);
  return v2;
  function delta_get(a) {
    let index = property_get(a, "index");
    let choices = property_get(a, "choices");
    let left = list_index_last(choices);
    let left2 = subtract(left, index);
    let v = add(left2, 1);
    return v;
  }
}

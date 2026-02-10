import { property_get } from "../../../love/public/src/property_get.mjs";
import { marker_down_generic } from "../../../love/public/src/marker_down_generic.mjs";
import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
export async function marker_bottom() {
  let v2 = await marker_down_generic(delta_get);
  return v2;
  function delta_get(a) {
    let index = property_get(a, "index");
    let choices = property_get(a, "choices");
    let v = list_index_last(choices) - index + 1;
    return v;
  }
}

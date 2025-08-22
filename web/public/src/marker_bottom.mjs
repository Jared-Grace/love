import { marker } from "./marker.mjs";
import { marker_down_generic } from "./marker_down_generic.mjs";
import { list_index_last } from "./list_index_last.mjs";
export async function marker_bottom() {
  marker("1");
  let v2 = await marker_down_generic(delta_get);
  return v2;
  function delta_get(a) {
    let { choices, index } = a;
    let v = list_index_last(choices) - index + 1;
    return v;
  }
}

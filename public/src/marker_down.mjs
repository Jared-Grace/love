import { marker } from "../../../love/public/src/marker.mjs";
import { marker_down_generic } from "../../../love/public/src/marker_down_generic.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
export async function marker_down(delta) {
  marker("1");
  let v = await marker_down_generic(delta_get);
  return v;
  function delta_get() {
    let i = integer_to(delta);
    return i;
  }
}

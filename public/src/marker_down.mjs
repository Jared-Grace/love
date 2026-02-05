import { marker } from "../../../love/public/src/marker.mjs";
import { marker_down_generic } from "../../../love/public/src/marker_down_generic.mjs";
import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
export async function marker_down(delta) {
  let v = await marker_down_generic(delta_get);
  return v;
  function delta_get() {
    let i = integer_to_try(delta);
    return i;
  }
}

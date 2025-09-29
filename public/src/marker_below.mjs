import { add_1 } from "../../../love/public/src/add_1.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { marker_above_generic } from "../../../love/public/src/marker_above_generic.mjs";
export async function marker_below(code) {
  marker("1");
  let fn = add_1;
  let v = await marker_above_generic(fn, code);
  return v;
}

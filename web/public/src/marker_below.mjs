import { marker } from "./marker.mjs";
import { marker_above_generic } from "./marker_above_generic.mjs";
export async function marker_below(code) {
  marker("1");
  let fn = add_1;
  let v = await marker_above_generic(fn, code);
  return v;
}

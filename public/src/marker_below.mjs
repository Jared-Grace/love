import { add_ } from "../../../love/public/src/add_1.mjs";
import { marker_above_generic } from "../../../love/public/src/marker_above_generic.mjs";
export async function marker_below(code) {
  let fn = add_;
  let v = await marker_above_generic(fn, code);
  return v;
}

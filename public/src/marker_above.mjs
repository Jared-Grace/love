import { marker_above_generic } from "../../../love/public/src/marker_above_generic.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
export async function marker_above(code) {
  let fn = identity;
  let v = await marker_above_generic(fn, code);
  return v;
}

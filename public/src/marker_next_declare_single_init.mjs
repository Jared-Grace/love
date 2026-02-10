import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_declare_single_init } from "../../../love/public/src/js_declare_single_init.mjs";
import { marker_next_get } from "../../../love/public/src/marker_next_get.mjs";
export function marker_next_declare_single_init(a) {
  let v = marker_next_get(a);
  let next = property_get(v, "next");
  let oe = js_declare_single_init(next);
  return oe;
}

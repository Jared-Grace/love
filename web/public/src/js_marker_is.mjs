import { js_marker_name_get } from "./js_marker_name_get.mjs";
import { js_marker_named } from "./js_marker_named.mjs";
export function js_marker_is(v) {
  let marker_name_actual = js_marker_name_get(v);
  return marker_name_actual != null;
}

import { js_marker_name_get } from "./js_marker_name_get.mjs";
export function js_marker_is(v) {
  let marker_name_actual = js_marker_name_get(v);
  let v2 = marker_name_actual != null;
  return v2;
}

import { js_marker_name_get } from "../../../love/public/src/js_marker_name_get.mjs";
export function js_marker_named(v, marker_name) {
  let marker_name_actual = js_marker_name_get(v);
  if (marker_name_actual !== marker_name) {
    return false;
  }
  return true;
}

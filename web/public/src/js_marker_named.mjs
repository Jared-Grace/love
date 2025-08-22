import { js_marker_name_get } from "./js_marker_name_get.mjs";
export function js_marker_named(v, marker_name) {
  let marker_name_actual = js_marker_name_get(v);
  if (marker_name_actual !== marker_name) {
    let v2 = false;
    return v2;
  }
  let v3 = true;
  return v3;
}

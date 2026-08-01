import { not_equal } from "./not_equal.mjs";
import { js_marker_name_get } from "./js_marker_name_get.mjs";
export function js_marker_named(v, marker_name) {
  let marker_name_actual = js_marker_name_get(v);
  if (not_equal(marker_name_actual, marker_name)) {
    return false;
  }
  return true;
}

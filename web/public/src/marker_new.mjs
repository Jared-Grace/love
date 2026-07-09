import { property_get } from "../../../love/public/src/property_get.mjs";
import { marker_current_set } from "../../../love/public/src/marker_current_set.mjs";
import { js_marker_insert } from "../../../love/public/src/js_marker_insert.mjs";
import { marker_next_index } from "../../../love/public/src/marker_next_index.mjs";
import { function_transform_marker } from "../../../love/public/src/function_transform_marker.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
export async function marker_new() {
  let f_name = await function_current_get();
  let v = await function_transform_marker(f_name, lambda);
  return v;
  async function lambda(a) {
    let v2 = marker_next_index(a);
    let stack2 = property_get(v2, "stack2");
    let index = property_get(v2, "index");
    let name = "2";
    await js_marker_insert(name, stack2, index);
    await marker_current_set(name);
  }
}

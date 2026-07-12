import { property_get } from "./property_get.mjs";
import { marker_current_set } from "./marker_current_set.mjs";
import { js_marker_insert } from "./js_marker_insert.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { function_current_get } from "./function_current_get.mjs";
export async function marker_new() {
  let f_name = await function_current_get();
  let v = await function_transform_marker(f_name, lambda);
  return v;
  async function lambda(a) {
    let v2 = marker_next_index(a);
    let stack_2 = property_get(v2, "stack_2");
    let index = property_get(v2, "index");
    let name = "2";
    await js_marker_insert(name, stack_2, index);
    await marker_current_set(name);
  }
}

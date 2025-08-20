import { marker_current_set } from "./marker_current_set.mjs";
import { js_marker_insert } from "./js_marker_insert.mjs";
import { marker } from "./marker.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function marker_new() {
  marker("1");
  let f_name = await data_function_current_get();
  let v = await function_transform_marker(f_name, lambda);
  return v;
  async function lambda(a) {
    let { index, stack2 } = marker_next_index(a);
    let name = "2";
    await js_marker_insert(name, stack2, index);
    marker_current_set(name);
  }
}

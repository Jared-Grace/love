import { js_expand_generic } from "./js_expand_generic.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function marker_expand() {
  let f_name = await data_function_current_get();
  let v = await function_transform_marker(f_name, lambda2);
  return v;
  async function lambda2(a) {
    let { next, index } = marker_next_get(a);
    let { stack2 } = a;
    let inserted = await js_expand_generic(next, stack2, index);
    return inserted;
  }
}

import { js_expand_generic } from "../../../love/public/src/js_expand_generic.mjs";
import { marker_next_get } from "../../../love/public/src/marker_next_get.mjs";
import { function_transform_marker } from "../../../love/public/src/function_transform_marker.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
export async function marker_expand() {
  let f_name = await function_current_get();
  let v = await function_transform_marker(f_name, lambda2);
  return v;
  async function lambda2(a) {
    let { next, index } = marker_next_get(a);
    let { stack2, ast } = a;
    let inserted = await js_expand_generic(next, stack2, index, ast);
    return inserted;
  }
}

import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_expand_generic } from "../../../love/public/src/js_expand_generic.mjs";
import { marker_next_get } from "../../../love/public/src/marker_next_get.mjs";
import { function_transform_marker } from "../../../love/public/src/function_transform_marker.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
export async function marker_expand() {
  let f_name = await function_current_get();
  let v = await function_transform_marker(f_name, lambda);
  return v;
  async function lambda(a) {
    let r = marker_next_get(a);
    let next = property_get(r, "next");
    let ast = property_get(a, "ast");
    let stack = property_get(a, "stack2");
    let inserted = await js_expand_generic(next, stack, ast);
    return inserted;
  }
}

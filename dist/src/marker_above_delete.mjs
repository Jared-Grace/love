import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
import { marker_previous_index } from "../../../love/public/src/marker_previous_index.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_transform_marker_current } from "../../../love/public/src/function_transform_marker_current.mjs";
export async function marker_above_delete() {
  async function lambda(a) {
    let p = marker_previous_index(a);
    let index = property_get(p, "index");
    let stack2 = property_get(p, "stack2");
    list_remove_at(stack2, index);
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}

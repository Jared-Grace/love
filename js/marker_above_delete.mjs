import { list_remove_at } from "./list_remove_at.mjs";
import { marker_previous_index } from "./marker_previous_index.mjs";
import { property_get } from "./property_get.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
export async function marker_above_delete() {
  async function lambda(a) {
    let p = marker_previous_index(a);
    let index = property_get(p, "index");
    let stack_2 = property_get(p, "stack_2");
    list_remove_at(stack_2, index);
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}

import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_remove } from "./list_remove.mjs";
export async function marker_down_generic(delta_get) {
  let v = await function_transform_marker_current(lambda);
  return v;
  async function lambda(a) {
    let { stack2, stack1 } = a;
    let index = list_index_of(stack2, stack1);
    list_remove(stack2, stack1);
    let index_new =
      index +
      delta_get({
        choices: stack2,
        index: index,
      });
    list_insert(stack2, index_new, stack1);
  }
}

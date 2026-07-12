import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_remove } from "./list_remove.mjs";
import { text_combine } from "./text_combine.mjs";
export async function marker_down_generic(delta_get) {
  let v = await function_transform_marker_current(lambda);
  return v;
  async function lambda(a) {
    let { stack_2, stack_1 } = a;
    let index = list_index_of(stack_2, stack_1);
    list_remove(stack_2, stack_1);
    let index_new = text_combine(
      index,
      delta_get({
        choices: stack_2,
        index: index,
      }),
    );
    list_insert(stack_2, index_new, stack_1);
  }
}

import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_get_end_2 } from "../../../love/public/src/list_get_end_2.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { list_get_end } from "../../../love/public/src/list_get_end.mjs";
import { function_transform_marker_current } from "../../../love/public/src/function_transform_marker_current.mjs";
export async function marker_leave() {
  async function lambda(a) {
    let stack = property_get(a, "stack");
    let stack_4 = list_get_end(stack, 4);
    let stack_5 = list_get_end(stack, 5);
    list_is_assert(stack_5);
    let index = list_index_of(stack_5, stack_4);
    let stack_1 = list_get_end_1(stack);
    let stack_2 = list_get_end_2(stack);
    list_remove(stack_2, stack_1);
    list_insert(stack_5, index, stack_1);
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}

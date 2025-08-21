import { list_is } from "./list_is.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_get_end_2 } from "./list_get_end_2.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_is_assert } from "./list_is_assert.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_leave() {
  async function lambda(a) {
    marker("1");
    let { stack } = a;
    let stack4 = list_get_end(stack, 4);
    let stack5 = list_get_end(stack, 5);
    list_is_assert(stack5);
    let index = list_index_of(stack5, stack4);
    let stack1 = list_get_end_1(stack);
    let stack2 = list_get_end_2(stack);
    list_remove(stack2, stack1);
    let l = list_is(value);
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}

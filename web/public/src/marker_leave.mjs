import { list_is_assert } from "./list_is_assert.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { log } from "./log.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_leave() {
  async function lambda(a) {
    marker("1");
    let { stack } = a;
    let stack4 = list_get_end(stack, 4);
    let stack5 = list_get_end(stack, 5);
    let result = list_is_assert(list);
    log(stack4);
    log(stack5);
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}

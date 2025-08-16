import { list_index_of } from "./list_index_of.mjs";
import { list_skip } from "./list_skip.mjs";
import { function_types } from "./function_types.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function js_marker_enter(ast) {
  marker("1");
  let f_types = await function_types();
  async function lambda(a) {
    let { stack2, stack1 } = a;
    let index = list_index_of(stack2, item);
    let skipped = list_skip(stack2, skip_count);
  }
  let v = await function_transform_marker_current(lambda);
}

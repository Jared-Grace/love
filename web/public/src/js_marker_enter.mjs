import { list_first } from "./list_first.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_skip } from "./list_skip.mjs";
import { function_types } from "./function_types.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
import { list_index_of_next } from "./list_index_of_next.mjs";
export async function js_marker_enter(ast) {
  marker("1");
  let f_types = await function_types();
  async function lambda(a) {
    let { stack2, stack1 } = a;
    let index_next = list_index_of_next(stack2, stack1);
    let skipped = list_skip(stack2, index_next);
    let first = list_first(list);
  }
  let v = await function_transform_marker_current(lambda);
}

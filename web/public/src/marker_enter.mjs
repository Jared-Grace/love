import { js_declaration_to_block_body } from "./js_declaration_to_block_body.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { list_remove } from "./list_remove.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_types_function_includes } from "./js_types_function_includes.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_enter() {
  marker("1");
  async function lambda(a) {
    let n = marker_next_get(a);
    let { next, stack1, stack2 } = n;
    let nt = js_node_type(next);
    if (js_types_function_includes(nt)) {
      let body = null;
      body = js_declaration_to_block_body(next);
      list_add_first(body, stack1);
      list_remove(stack2, stack1);
    }
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}

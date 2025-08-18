import { js_declaration_to_block_body } from "./js_declaration_to_block_body.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { list_remove } from "./list_remove.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { log_unparse } from "./log_unparse.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { js_type } from "./js_type.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { log } from "./log.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_types_function_includes } from "./js_types_function_includes.mjs";
import { js_types_function } from "./js_types_function.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_skip } from "./list_skip.mjs";
import { function_types } from "./function_types.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
import { list_index_of_next } from "./list_index_of_next.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function marker_enter() {
  marker("1");
  async function lambda(a) {
    let n = marker_next_get(a);
    let { next, stack1, stack2 } = n;
    let nt = js_node_type(next);
    if (js_types_function_includes(nt)) {
      let body = js_declaration_to_block_body(next);
      list_add_first(body, stack1);
      list_remove(stack2, stack1);
    }
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}

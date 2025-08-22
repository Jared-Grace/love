import { list_get } from "./list_get.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { js_declaration_to_block_body } from "./js_declaration_to_block_body.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { list_remove } from "./list_remove.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_types_function_includes } from "./js_types_function_includes.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_enter() {
  async function lambda(a) {
    marker("1");
    let ni = marker_next_index(a);
    let { index, stack1, stack2 } = ni;
    let next = list_get(stack2, index);
    let body = null;
    let nt = js_node_type(next);
    if (js_types_function_includes(nt)) {
      body = js_declaration_to_block_body(next);
    } else if (nt === "IfStatement") {
      let consequent = object_property_get(next, "consequent");
      body = object_property_get(consequent, "body");
    }
    index++;
    let nn = null_not_is(body);
    if (nn) {
      list_add_first(body, stack1);
      list_remove(stack2, stack1);
    }
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}

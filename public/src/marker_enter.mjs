import { js_types_function_includes_node } from "../../../love/public/src/js_types_function_includes_node.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { marker_next_index } from "../../../love/public/src/marker_next_index.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { js_declaration_to_block_body } from "../../../love/public/src/js_declaration_to_block_body.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { js_node_type } from "../../../love/public/src/js_node_type.mjs";
import { function_transform_marker_current } from "../../../love/public/src/function_transform_marker_current.mjs";
export async function marker_enter() {
  async function lambda(a) {
    let v2 = marker_next_index(a);
    let stack2 = property_get(v2, "stack2");
    let stack1 = property_get(v2, "stack1");
    let index = property_get(v2, "index");
    let body = null;
    while (body === null) {
      let next = list_get(stack2, index);
      var i = js_types_function_includes_node(next);
      if (i) {
        body = js_declaration_to_block_body(next);
      } else {
        let nt = js_node_type(next);
        if (nt === "IfStatement") {
          let consequent = property_get(next, "consequent");
          body = property_get(consequent, "body");
        }
      }
      index++;
    }
    let nn = null_not_is(body);
    if (nn) {
      list_add_first(body, stack1);
      list_remove(stack2, stack1);
    }
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}

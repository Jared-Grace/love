import { js_statement_if_consequent_get } from "./js_statement_if_consequent_get.mjs";
import { js_types_function_includes_node } from "./js_types_function_includes_node.mjs";
import { list_get } from "./list_get.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { list_remove } from "./list_remove.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
export async function marker_enter() {
  async function lambda(a) {
    let v2 = marker_next_index(a);
    let stack_2 = property_get(v2, "stack_2");
    let stack_1 = property_get(v2, "stack_1");
    let index = property_get(v2, "index");
    let body = null;
    while (body === null) {
      let next = list_get(stack_2, index);
      var i = js_types_function_includes_node(next);
      if (i) {
        body = js_function_declaration_to_block_body(next);
      } else {
        let nt = js_node_type(next);
        if (nt === "IfStatement") {
          let consequent = js_statement_if_consequent_get(next);
          body = property_get(consequent, "body");
        }
      }
      index++;
    }
    let nn = null_not_is(body);
    if (nn) {
      list_add_first(body, stack_1);
      list_remove(stack_2, stack_1);
    }
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}

import { equal_by_async } from "./equal_by_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_node_type_is_if_async } from "./js_node_type_is_if_async.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export function js_if_else_if_combine(ast) {
  function lambda(v) {
    let { node, stack } = v;
    let stack1 = list_get_end_1(stack);
    async function lambda3() {
      let consequent2 = object_property_get(node, "consequent");
      let consequent = object_property_get(stack1, "consequent");
      let e = await equal_by_async(consequent, consequent2, js_unparse);
      log({
        v2: e,
      });
    }
    js_node_type_is_if_async(stack1, "IfStatement", lambda3);
  }
  js_visit_type(ast, "IfStatement", lambda);
}

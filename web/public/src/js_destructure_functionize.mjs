import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { js_node_atomize_name } from "../../../love/public/src/js_node_atomize_name.mjs";
import { js_identifier_unique_ast } from "../../../love/public/src/js_identifier_unique_ast.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_destructure_functionize(ast) {
  marker("1");
  let variable_name = js_node_atomize_name();
  function lambda(v) {
    let node2 = object_property_get(v, "node");
    let stack = object_property_get(v, "stack");
    log({
      node2,
      stack,
    });
    let properties = object_property_get(node2, "properties");
    let mi = list_multiple_is(properties);
    if (mi) {
      function lambda2(p) {
        return;
        let e1 = list_get_end_1(stack2);
        let unique = js_identifier_unique_ast(ast, variable_name);
        log({
          p,
        });
        let key = object_property_get(p, "key");
        let value = object_property_get(p, "value");
      }
      each(properties, lambda2);
    }
    return;
    let id = object_property_get(node2, "id");
  }
  js_visit_type(ast, "ObjectPattern", lambda);
  return;
  let { node, parent, context } = a;
}

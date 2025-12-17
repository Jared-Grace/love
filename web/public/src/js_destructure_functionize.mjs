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
  function lambda(v) {
    let node2 = object_property_get(v, "node");
    log({
      node2,
    });
    let properties = object_property_get(node2, "properties");
    let mi = list_multiple_is(properties);
    if (mi) {
      function lambda2(p) {
        return;
        let unique = js_identifier_unique_ast(ast, "v");
        log({
          p,
        });
        let key = object_property_get(p, "key");
        let value = object_property_get(p, "value");
      }
      each(properties, lambda2);
    }
    return;
    let stack = object_property_get(v, "stack");
    let id = object_property_get(node2, "id");
  }
  js_visit_type(ast, "ObjectPattern", lambda);
  return;
  let variable_name = js_node_atomize_name();
  let { node, parent, context } = a;
}

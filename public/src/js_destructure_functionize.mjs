import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { list_get_end } from "../../../love/public/src/list_get_end.mjs";
import { js_node_type_is_assert } from "../../../love/public/src/js_node_type_is_assert.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
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
    let properties = object_property_get(node2, "properties");
    let mi = list_multiple_is(properties);
    if (mi) {
      let stack = object_property_get(v, "stack");
      let e1 = list_get_end_1(stack);
      js_node_type_is_assert(e1, "VariableDeclarator");
      let e4 = list_get_end(stack, 4);
      list_is_assert(e4);
      let e3 = list_get_end(stack, 3);
      log({
        e3,
      });
      return;
      let unique = js_identifier_unique_ast(ast, variable_name);
      function lambda2(p) {
        return;
        log({
          p,
        });
        let key = object_property_get(p, "key");
        let value = object_property_get(p, "value");
        list_insert(list, index, value2);
      }
      each(properties, lambda2);
      let expression = js_parse_expression(unique);
      object_property_set(e1, "id", expression);
    }
    return;
    let id = object_property_get(node2, "id");
  }
  js_visit_type(ast, "ObjectPattern", lambda);
  return;
  let { node, parent, context } = a;
}

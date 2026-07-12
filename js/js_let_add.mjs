import { js_identifier_defineds_includes } from "./js_identifier_defineds_includes.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { not } from "./not.mjs";
import { object_replace } from "./object_replace.mjs";
import { property_get } from "./property_get.mjs";
import { js_declare } from "./js_declare.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_let_add(ast) {
  function lambda(v) {
    let stack = property_get(v, "stack");
    let stack_1 = list_get_end_1(stack);
    let type_is = js_node_type_is(stack_1, "ExpressionStatement");
    if (not(type_is)) {
      return;
    }
    let node = property_get(v, "node");
    let right = property_get(node, "right");
    let left = property_get(node, "left");
    let ii = js_identifier_is(left);
    if (not(ii)) {
      return;
    }
    let name = property_get(left, "name");
    let includes = js_identifier_defineds_includes(v, name);
    if (includes) {
      return;
    }
    let assign = js_declare(name, right);
    object_replace(stack_1, assign);
  }
  js_visit_type(ast, "AssignmentExpression", lambda);
  return;
}

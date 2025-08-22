import { not } from "./not.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_single } from "./list_single.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_statement_call_get(node) {
  let expression = null;
  let declaration = null;
  if (js_node_type_is(node, "ExpressionStatement")) {
    let { expression: expression_next } = node;
    expression = expression_next;
  } else if (js_node_type_is(node, "VariableDeclaration")) {
    let { declarations } = node;
    if (list_multiple_is(declarations)) {
      let v = null;
      return v;
    }
    declaration = list_single(declarations);
    expression = object_property_get(declaration, "init");
  }
  if (js_node_type_is(expression, "AwaitExpression")) {
    expression = object_property_get(expression, "argument");
  }
  let a = js_node_type_is(expression, "CallExpression");
  if (not(a)) {
    let v2 = null;
    return v2;
  }
  let v3 = {
    expression,
    declaration,
  };
  return v3;
}

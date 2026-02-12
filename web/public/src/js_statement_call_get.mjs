import { not } from "../../../love/public/src/not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_statement_call_get(node) {
  let expression = null;
  let declaration = null;
  if (js_node_type_is(node, "ExpressionStatement")) {
    let expression_next = property_get(node, "expression");
    expression = expression_next;
  } else if (js_node_type_is(node, "VariableDeclaration")) {
    let declarations = property_get(node, "declarations");
    if (list_multiple_is(declarations)) {
      return null;
    }
    declaration = list_single(declarations);
    expression = property_get(declaration, "init");
  }
  if (js_node_type_is(expression, "AwaitExpression")) {
    expression = property_get(expression, "argument");
  }
  let a = js_node_type_is(expression, "CallExpression");
  if (not(a)) {
    return null;
  }
  let v3 = {
    expression,
    declaration,
  };
  return v3;
}

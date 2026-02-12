import { log } from "../../../love/public/src/log.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_statement_call_get(node) {
  let call = null;
  let declaration = null;
  let assignment = null;
  log({
    node,
  });
  if (js_node_type_is(node, "ExpressionStatement")) {
    let expression_next = property_get(node, "expression");
    call = expression_next;
    if (js_node_type_is(expression_next, "AssignmentExpression")) {
      assignment = expression_next;
      call = property_get(assignment, "right");
    } else {
      call = expression_next;
    }
  } else if (js_node_type_is(node, "VariableDeclaration")) {
    let declarations = property_get(node, "declarations");
    if (list_multiple_is(declarations)) {
      return null;
    }
    declaration = list_single(declarations);
    call = property_get(declaration, "init");
  }
  if (js_node_type_is(call, "AwaitExpression")) {
    call = property_get(call, "argument");
  }
  let a = js_node_type_is(call, "CallExpression");
  if (not(a)) {
    return null;
  }
  let v3 = {
    call,
    declaration,
    assignment,
  };
  return v3;
}

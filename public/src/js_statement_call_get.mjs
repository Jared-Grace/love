import {object_property_get} from './object_property_get.mjs';
import {list_single} from './list_single.mjs';
import {list_multiple_is} from './list_multiple_is.mjs';
import {js_node_type_is} from './js_node_type_is.mjs';
export function js_statement_call_get(next) {
  let expression = null;
  if (js_node_type_is(next, "ExpressionStatement")) {
    let {expression: expression_next} = next;
    expression = expression_next;
  } else if (js_node_type_is(next, "VariableDeclaration")) {
    let {declarations} = next;
    if (list_multiple_is(declarations)) {
      return null;
    }
    let declaration = list_single(declarations);
    expression = object_property_get(declaration, "init");
  }
  if (js_node_type_is(expression, "AwaitExpression")) {
    expression = object_property_get(expression, "argument");
  }
  if (!js_node_type_is(expression, "CallExpression")) {
    return null;
  }
  return expression;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_node_before } from "./app_code_expression_node_before.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { app_code_operator_called_is } from "./app_code_operator_called_is.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_get } from "./list_get.mjs";
import { error } from "./error.mjs";
export function app_code_expression_from_js(node, values) {
  arguments_assert(arguments, 2);
  ("the expression shape a line of javascript reads as, once javascript itself has read it, with every name standing as the value values holds for it: a + b * 2, with a 1 and b 3, gives the shape 1 + 3 * 2");
  ("The way into the shape the expression lessons step through, for a line a learner wrote rather than one a lesson built. Stepping a program's line through that shape means a program and an expression lesson take a line apart by one rule, in one order, rather than by two that only happen to agree today.");
  let type = js_node_type(node);
  if (equal(type, "Literal")) {
    let value = property_get(node, "value");
    return value;
  }
  if (equal(type, "Identifier")) {
    let name = property_get(node, "name");
    let value_named = property_get(values, name);
    return value_named;
  }
  if (equal(type, "UnaryExpression")) {
    let symbol = property_get(node, "operator");
    let acted_on = property_get(node, "argument");
    let acted_on_shape = app_code_expression_from_js(acted_on, values);
    let minus_spelled_is =
      equal(symbol, "-") && equal(js_node_type(acted_on), "Literal");
    if (minus_spelled_is) {
      ("a minus in front of a plain number is how that number is spelled, not an operator anybody presses");
      let minus_spelled = -acted_on_shape;
      return minus_spelled;
    }
    let before = app_code_expression_node_before(symbol, acted_on_shape);
    return before;
  }
  let two_sided_types = ["BinaryExpression", "LogicalExpression"];
  if (list_includes(two_sided_types, type)) {
    let symbol_between = property_get(node, "operator");
    let node2 = property_get(node, "left");
    let left = app_code_expression_from_js(node2, values);
    let node3 = property_get(node, "right");
    let right = app_code_expression_from_js(node3, values);
    let between = app_code_expression_node(left, symbol_between, right);
    return between;
  }
  if (equal(type, "CallExpression")) {
    let handed = property_get(node, "arguments");
    let ast = property_get(node, "callee");
    let name_called = js_unparse(ast);
    let called = app_code_operator_called_is(name_called);
    if (called && list_size_equal(handed, 1)) {
      let node4 = list_get(handed, 0);
      let inside = app_code_expression_from_js(node4, values);
      let call = app_code_expression_node_before(name_called, inside);
      return call;
    }
  }
  error(
    "only a value written out, a name, an operator, or a call the expression lessons press can become an expression shape: " +
      type,
  );
}

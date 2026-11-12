import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { js_value_name_built_in_is } from "./js_value_name_built_in_is.mjs";
import { js_value_names } from "./js_value_names.mjs";
import { app_learn_js_expression_node_before } from "./app_learn_js_expression_node_before.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_learn_js_expression_node } from "./app_learn_js_expression_node.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { app_learn_js_operator_called_is } from "./app_learn_js_operator_called_is.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_operators_called_two } from "./app_learn_js_operators_called_two.mjs";
import { app_learn_js_expression_name_is } from "./app_learn_js_expression_name_is.mjs";
import { app_learn_js_expression_node_index } from "./app_learn_js_expression_node_index.mjs";
import { js_code_length } from "./js_code_length.mjs";
import { list_size } from "./list_size.mjs";
import { app_learn_js_expression_name } from "./app_learn_js_expression_name.mjs";
import { error } from "./error.mjs";
export function app_learn_js_expression_from_js(node, values) {
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
    ("2026-10-17: NaN, Infinity and undefined stand as the value JavaScript gives them, unless the line's names hold one of them");
    if (js_value_name_built_in_is(values, name)) {
      let built_in = js_value_names();
      let value_built_in = property_get(built_in, name);
      return value_built_in;
    }
    let value_named = property_get(values, name);
    return value_named;
  }
  if (equal(type, "UnaryExpression")) {
    let symbol = property_get(node, "operator");
    let acted_on = property_get(node, "argument");
    let acted_on_shape = app_learn_js_expression_from_js(acted_on, values);
    let minus_spelled_is =
      equal(symbol, "-") && equal(js_node_type(acted_on), "Literal");
    if (minus_spelled_is) {
      ("a minus in front of a plain number is how that number is spelled, not an operator anybody presses");
      let minus_spelled = -acted_on_shape;
      return minus_spelled;
    }
    let before = app_learn_js_expression_node_before(symbol, acted_on_shape);
    return before;
  }
  let two_sided_types = ["BinaryExpression", "LogicalExpression"];
  if (list_includes(two_sided_types, type)) {
    let symbol_between = property_get(node, "operator");
    let node2 = property_get(node, "left");
    let left = app_learn_js_expression_from_js(node2, values);
    let node3 = property_get(node, "right");
    let right = app_learn_js_expression_from_js(node3, values);
    let between = app_learn_js_expression_node(left, symbol_between, right);
    return between;
  }
  if (equal(type, "CallExpression")) {
    let handed = property_get(node, "arguments");
    let ast = property_get(node, "callee");
    let name_called = js_unparse(ast);
    let called = app_learn_js_operator_called_is(name_called);
    if (called && list_size_equal(handed, 1)) {
      let node4 = list_get(handed, 0);
      let inside = app_learn_js_expression_from_js(node4, values);
      let call = app_learn_js_expression_node_before(name_called, inside);
      return call;
    }
    let called_two = app_learn_js_operators_called_two();
    if (list_includes(called_two, name_called) && list_size_equal(handed, 2)) {
      let node5 = list_get(handed, 0);
      let first = app_learn_js_expression_from_js(node5, values);
      let node6 = list_get(handed, 1);
      let second = app_learn_js_expression_from_js(node6, values);
      let call_two = app_learn_js_expression_node(first, name_called, second);
      return call_two;
    }
  }
  if (equal(type, "MemberExpression")) {
    ("2026-11-09, at the human's asking: an array's name is kept as it is written, so a.length and a[2] are each one press, and the line never has the whole array written into it. Only an array held by a plain name is read this way, since that is all the array lessons write");
    let held_by = property_get(node, "object");
    let held_by_type = js_node_type(held_by);
    if (equal(held_by_type, "Identifier")) {
      let array_name = property_get(held_by, "name");
      let held = property_get(values, array_name);
      let items = held;
      if (app_learn_js_expression_name_is(held)) {
        items = property_get(held, "value");
      }
      let computed = property_get(node, "computed");
      let read = property_get(node, "property");
      if (computed) {
        let index = app_learn_js_expression_from_js(read, values);
        let indexed = app_learn_js_expression_node_index(
          array_name,
          items,
          index,
        );
        return indexed;
      }
      let read_name = property_get(read, "name");
      if (equal(read_name, "length")) {
        let length_code = js_code_length(array_name);
        let size = list_size(items);
        let length = app_learn_js_expression_name(length_code, size);
        return length;
      }
    }
  }
  error(
    "only a value written out, a name, an operator, a call the expression lessons press, or an array's length or item read by its name can become an expression shape: " +
      type,
  );
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { app_code_expression_name_is } from "./app_code_expression_name_is.mjs";
import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_expression_node_logical_is(item) {
  arguments_assert(arguments, 1);
  ("whether a part of an expression is an && or an || standing between two sides: the two operators JavaScript may finish without ever reading their right side");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    return false;
  }
  if (app_code_expression_name_is(item)) {
    return false;
  }
  if (app_code_expression_node_before_is(item)) {
    return false;
  }
  let symbol = property_get(item, "operator");
  let right = js_operator_and_symbol();
  let logical = equal(symbol, right) || equal(symbol, js_operator_or_symbol());
  return logical;
}

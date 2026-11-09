import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_expression_node_is } from "./app_learn_js_expression_node_is.mjs";
import { not } from "./not.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_learn_js_operator_index_symbol } from "./app_learn_js_operator_index_symbol.mjs";
import { equal } from "./equal.mjs";
export function app_learn_js_expression_node_index_is(item) {
  arguments_assert(arguments, 1);
  ("whether a part of an expression shape reads one item of an array by its index, as ",
    fn_name("app_learn_js_expression_node_index"),
    " makes one");
  let node_is = app_learn_js_expression_node_is(item);
  if (not(node_is)) {
    return false;
  }
  let symbol = property_get_or(item, "operator", null);
  let index_symbol = app_learn_js_operator_index_symbol();
  let index_is = equal(symbol, index_symbol);
  return index_is;
}

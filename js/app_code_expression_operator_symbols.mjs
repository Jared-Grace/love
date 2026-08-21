import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat } from "./list_concat.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";

export function app_code_expression_operator_symbols(item) {
  arguments_assert(arguments, 1);
  "Every operator on an expression, by its symbol, in the order the line writes them from left to right: for 5 - 6 / 3 + 4 the minus, the divide and the plus.";
  "For a telling that has to name the operators a learner can still see. What is left on a line after a step is a fact about the line rather than about the step, so it is read back off the line the same way its value is - handed over by whatever built the line, it could disagree with what is printed.";
  "Reading order rather than the order they are worked out in, because that is the order a reader meets them in. An operator written between two things is named after everything on its left and before everything on its right; one written in front of the single thing it acts on is named first.";
  "A value rather than an operator hands back nothing, so a side that has already been worked out adds no symbol and the walk needs no test at the place it recurses.";
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    let none = [];
    return none;
  }
  let symbol = property_get(item, "operator");
  let right = property_get(item, "right");
  let from_right = app_code_expression_operator_symbols(right);
  let before_is = app_code_expression_node_before_is(item);
  if (before_is) {
    let written_first = list_concat([symbol], from_right);
    return written_first;
  }
  let left = property_get(item, "left");
  let from_left = app_code_expression_operator_symbols(left);
  let with_symbol = list_concat(from_left, [symbol]);
  let all = list_concat(with_symbol, from_right);
  return all;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_operator_index_symbol } from "./app_learn_js_operator_index_symbol.mjs";
export function app_learn_js_expression_node_index(name, items, index) {
  arguments_assert(arguments, 3);
  ("reading one item of an array by its index, as one step of an expression shape: a[2] while a is love, joy, peace, which a press works out as peace; the index may itself be another step, as a.length - 1 is in a[a.length - 1]");
  ("The array stands on the left as the value it already is and the index on the right, so it is ready exactly when the index is a value - the same rule every two-sided operator has, read by the same walkers.");
  ("The array's name is kept beside it so the line is written with the name, a, rather than every item spelled out: chosen by the human 2026-11-09. Not picked: reading a as a step of its own, which is the order JavaScript reads it in, but which writes the whole array into the line in place of the name the lesson is about.");
  let symbol = app_learn_js_operator_index_symbol();
  let node = {
    left: items,
    operator: symbol,
    right: index,
    name,
  };
  return node;
}

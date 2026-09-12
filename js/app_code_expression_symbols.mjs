import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_code_expression_symbols(item) {
  arguments_assert(arguments, 1);
  ("every operator standing in a shape, by its symbol, however deep it sits: the shape printed as Math.floor(14 / 4) * 4 gives back Math.floor, / and *");
  ("What a check over generated shapes needs in order to say it looked at anything. A generator quietly narrowed back to one operator still hands over a list of shapes and still passes every check made of them, and the only way to tell that apart from a full sweep is to ask the shapes themselves which operators they turned out to hold.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    let none = [];
    return none;
  }
  let symbol = property_get(item, "operator");
  let right = property_get(item, "right");
  let right_symbols = app_code_expression_symbols(right);
  let before_is = app_code_expression_node_before_is(item);
  if (before_is) {
    let one_sided = list_concat([symbol], right_symbols);
    return one_sided;
  }
  let left = property_get(item, "left");
  let left_symbols = app_code_expression_symbols(left);
  let both_sides = list_concat_multiple([
    [symbol],
    left_symbols,
    right_symbols,
  ]);
  return both_sides;
}

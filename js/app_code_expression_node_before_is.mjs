import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { app_code_expression_name_is } from "./app_code_expression_name_is.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
export function app_code_expression_node_before_is(item) {
  arguments_assert(arguments, 1);
  ("whether a part of an expression is an operator written before the single thing it acts on, rather than one standing between two");
  ("Asked wherever an expression is walked, because the two shapes are worked out, printed and stepped through differently and every walker meets both. An operator with no left side is the one, and reading it that way means no builder can make one that the walkers do not recognise.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    return false;
  }
  ("a name has no left side either, and is no operator at all");
  if (app_code_expression_name_is(item)) {
    return false;
  }
  let before = property_exists_not(item, "left");
  return before;
}

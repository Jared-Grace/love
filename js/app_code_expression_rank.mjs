import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { app_code_operators_by_rank } from "./app_code_operators_by_rank.mjs";
import { list_size } from "./list_size.mjs";
export function app_code_expression_rank(item) {
  arguments_assert(arguments, 1);
  ("how tightly a whole expression holds together, on the same scale its operators are ranked by: the shape for 2 * 3 comes out at the rank of a times, and a bare 7 comes out above every operator there is");
  ("What decides whether a shape needs parentheses when something is put beside it. The question is always about the outermost operator of the shape, and a caller working that out for itself would be reaching into the shape to read a property that means nothing when the shape is only a number.");
  ("A value ranks above the strongest operator rather than at some number written here, because that is what it means: there is nothing inside a number for a neighbouring operator to reach into, so no operator ever needs it gathered up in parentheses.");
  ("Above the strongest is asked of the LIST of strength classes rather than worked out from any one operator's rank. A rank is a place in that list, so one past its end is above every operator there is - and it stays above them when a class is added, which a number derived from the rank of a times would not.");
  let node_is = app_code_expression_node_is(item);
  if (node_is) {
    let symbol = property_get(item, "operator");
    let rank = app_code_operator_rank(symbol);
    return rank;
  }
  let classes = app_code_operators_by_rank();
  let above = list_size(classes);
  return above;
}

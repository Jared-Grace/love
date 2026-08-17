import { add_1 } from "./add_1.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_expression_rank(item) {
  arguments_assert(arguments, 1);
  (
    "how tightly a whole expression holds together, on the same scale its operators are ranked by: the shape for 2 * 3 comes out at the rank of a times, and a bare 7 comes out above every operator there is"
  );
  (
    "What decides whether a shape needs brackets when something is put beside it. The question is always about the outermost operator of the shape, and a caller working that out for itself would be reaching into the shape to read a property that means nothing when the shape is only a number."
  );
  (
    "A value ranks above the strongest operator rather than at some number written here, because that is what it means: there is nothing inside a number for a neighbouring operator to reach into, so no operator ever needs it gathered up in brackets."
  );
  let node_is = app_code_expression_node_is(item);
  if (node_is) {
    let symbol = property_get(item, "operator");
    let rank = app_code_operator_rank(symbol);
    return rank;
  }
  let strong = js_operator_asterisk_symbol();
  let strongest = app_code_operator_rank(strong);
  let above = add_1(strongest);
  return above;
}

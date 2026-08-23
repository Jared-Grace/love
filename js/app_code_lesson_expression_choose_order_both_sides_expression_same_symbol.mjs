import { app_code_arithmetic_to_value_parts_symbol } from "./app_code_arithmetic_to_value_parts_symbol.mjs";
import { app_code_arithmetic_to_value_symbols } from "./app_code_arithmetic_to_value_symbols.mjs";
import { app_code_lesson_expression_choose_order_both_sides_expression_generic } from "./app_code_lesson_expression_choose_order_both_sides_expression_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_lesson_expression_choose_order_both_sides_expression_same_symbol(
  want_true,
  outer_symbol,
) {
  arguments_assert(arguments, 2);
  ("a line with arithmetic on each side of a given comparison, where BOTH sides are written with the one same operator: 14 / 2 === 21 / 3");
  ("The run above the card counts the operators on the line out loud - / is solved before ===, but there are two / - and then says what doing that one operator means. Both of those sentences are only true of a line whose two sides share an operator, so the line the run is told about is built to share one.");
  ("The card below is built the other way, an operator drawn fresh for each side, because a learner pressing a line wants its two sides to look unalike. What is drawn to be READ and what is drawn to be PRESSED are already different lines here, and they are built to different rules as well.");
  let symbols = app_code_arithmetic_to_value_symbols();
  let symbol = list_random_item(symbols);
  function parts_get(value) {
    "every side of this line is written with the one operator drawn for the line";
    let parts = app_code_arithmetic_to_value_parts_symbol(value, symbol);
    return parts;
  }
  let tree =
    app_code_lesson_expression_choose_order_both_sides_expression_generic(
      want_true,
      outer_symbol,
      parts_get,
    );
  return tree;
}

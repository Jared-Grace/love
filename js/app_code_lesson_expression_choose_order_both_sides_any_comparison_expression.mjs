import { app_code_arithmetic_to_value_parts } from "./app_code_arithmetic_to_value_parts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_comparison_symbols_not_equality } from "./app_code_comparison_symbols_not_equality.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_lesson_expression_choose_order_both_sides_expression_generic } from "./app_code_lesson_expression_choose_order_both_sides_expression_generic.mjs";
export function app_code_lesson_expression_choose_order_both_sides_any_comparison_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a line with arithmetic on each side of a comparison that is not ===, built as a shape so the quiz can work one operator out at a time: 10 - 3 < 5 + 4, or 9 / 3 >= 1 + 1");
  ("=== is left out because the lesson before this one is made of nothing else. Drawn in again here it would come up on one line in six, and a learner would meet it as a line they have already been taught rather than as one of the five they have not.");
  ("The comparison is drawn fresh for every line rather than fixed for the lesson, so what a learner carries away is that the two sides are solved first WHATEVER stands between them - which is the whole of what this screen has to add. A lesson of < lines alone would teach a second special case as narrow as the first.");
  let symbols = app_code_comparison_symbols_not_equality();
  let outer_symbol = list_random_item(symbols);
  let tree =
    app_code_lesson_expression_choose_order_both_sides_expression_generic(
      want_true,
      outer_symbol,
      app_code_arithmetic_to_value_parts,
    );
  return tree;
}

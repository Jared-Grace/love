import { app_code_lesson_expression_choose_order_both_sides_above_arithmetic } from "./app_code_lesson_expression_choose_order_both_sides_above_arithmetic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_both_sides_expression_same_symbol } from "./app_code_lesson_expression_choose_order_both_sides_expression_same_symbol.mjs";
import { app_code_comparison_symbols_not_equality } from "./app_code_comparison_symbols_not_equality.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_lesson_expression_choose_order_both_sides_any_comparison_intro } from "./app_code_lesson_expression_choose_order_both_sides_any_comparison_intro.mjs";
export function app_code_lesson_expression_choose_order_both_sides_any_comparison_above(
  root,
) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the lesson whose lines hold any comparison but ===: one such line worked all the way through, and then the sentence saying what is new");
  ("The run is done on a TRUE line, because a true line is the one a learner can check against the two values they have just watched being worked out. A false line is worked through just as correctly and reads as something having gone wrong on a screen whose job is to show the working going right.");
  ("Its line has the SAME arithmetic operator on both sides, so the run can count that operator out loud - there are two of these, which one first - which is the question the card below is about to ask. The comparison in the middle is still drawn from the five, because that is the one thing this screen has to add.");
  let want_true = true;
  let symbols = app_code_comparison_symbols_not_equality();
  let outer_symbol = list_random_item(symbols);
  let tree =
    app_code_lesson_expression_choose_order_both_sides_expression_same_symbol(
      want_true,
      outer_symbol,
    );
  app_code_lesson_expression_choose_order_both_sides_above_arithmetic(
    root,
    tree,
    app_code_lesson_expression_choose_order_both_sides_any_comparison_intro,
  );
}

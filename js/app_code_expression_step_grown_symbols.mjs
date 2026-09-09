import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_expression_rank } from "./app_code_expression_rank.mjs";
import { app_code_expression_step_choices_symbols } from "./app_code_expression_step_choices_symbols.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_expression_step_choice_grown } from "./app_code_expression_step_choice_grown.mjs";
export function app_code_expression_step_grown_symbols(item, symbols) {
  arguments_assert(arguments, 2);
  ("the same line with one more operator on it, where that operator is one of the named ones: a 6 handed the two weaker symbols may come back as 2 + 6, or as 9 - 6, and never as 6 / 3");
  ("The line already there becomes one side of the new operator, exactly as it does for every other grower, so a line built this way still has exactly one part ready at every moment however long it grows.");
  let value = app_code_expression_value(item);
  let rank_most = app_code_expression_rank(item);
  let choices = app_code_expression_step_choices_symbols(
    value,
    rank_most,
    symbols,
  );
  let choice = list_random_item(choices);
  let grown = app_code_expression_step_choice_grown(item, choice);
  return grown;
}

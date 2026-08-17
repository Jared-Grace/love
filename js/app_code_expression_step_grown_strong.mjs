import { app_code_expression_rank } from "./app_code_expression_rank.mjs";
import { app_code_expression_step_choice_grown } from "./app_code_expression_step_choice_grown.mjs";
import { app_code_expression_step_choices_strong } from "./app_code_expression_step_choices_strong.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_expression_step_grown_strong(item) {
  arguments_assert(arguments, 1);
  ("the same line with one more operator on it, where that operator is a times or a divide: a 2 may come back as 2 * 4, or as 8 / 2");
  ("The first operator on a line built this way ends up the innermost one, and so the one that must be worked out first. Making that one a stronger operator is what puts the lesson's own rule on every line it hands out, rather than on the two lines in three that would carry one by chance.");
  let value = app_code_expression_value(item);
  let rank_most = app_code_expression_rank(item);
  let choices = app_code_expression_step_choices_strong(value, rank_most);
  let choice = list_random_item(choices);
  let grown = app_code_expression_step_choice_grown(item, choice);
  return grown;
}

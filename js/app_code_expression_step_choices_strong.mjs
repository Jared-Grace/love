import { app_code_expression_step_choices } from "./app_code_expression_step_choices.mjs";
import { app_code_operators_strong } from "./app_code_operators_strong.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_expression_step_choices_strong(value, rank_most) {
  arguments_assert(arguments, 2);
  (
    "the ways of growing a line by one operator that use a stronger operator - a times or a divide - and leave out the adding ones"
  );
  (
    "A line grown from weaker operators only is worked out from the left and never asks which operator is the stronger. That is a true rule and a lesson of its own, but it is not the rule the ordering lessons are teaching, so the operator that carries their rule is put on the line on purpose rather than left to chance."
  );
  let choices = app_code_expression_step_choices(value, rank_most);
  let strong = app_code_operators_strong();
  function strong_is(choice) {
    "a choice whose operator is one of the stronger pair";
    let symbol = property_get(choice, "symbol");
    let included = list_includes(strong, symbol);
    return included;
  }
  let strongest = list_filter(choices, strong_is);
  return strongest;
}

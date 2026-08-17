import { app_code_expression_rank } from "./app_code_expression_rank.mjs";
import { app_code_expression_step_choices_strong } from "./app_code_expression_step_choices_strong.mjs";
import { app_code_expression_step_grown } from "./app_code_expression_step_grown.mjs";
import { app_code_expression_step_grown_strong } from "./app_code_expression_step_grown_strong.mjs";
import { app_code_expression_step_value_least } from "./app_code_expression_step_value_least.mjs";
import { app_code_expression_step_value_most } from "./app_code_expression_step_value_most.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each_range } from "./each_range.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { range_from } from "./range_from.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_expression_flat_random_strong_first(operator_count) {
  arguments_assert(arguments, 1);
  ("a line of arithmetic with as many operators on it as asked for, needing no brackets, answerable a step at a time all the way down, and always carrying a times or a divide that has to go first: asked for three it gives lines like 2 + 9 / 3 - 4");
  ("Grown from a single number outwards rather than drawn as a whole and checked afterwards. Every step is chosen from the ones already known to work, so a line of any length is safe by the way it was made - there is no drawing again, and so no line length at which the making might fail to finish.");
  ("Every number written on it and every number any step of it comes to is a whole number between the least and the most, and at every moment exactly ONE part of it may be worked out. Those are promises of the growing rather than of the length, so a lesson may ask for two operators or five and lean on the same ones.");
  ("The starting number is drawn from the ones a stronger operator can be written beside rather than from all of them: nothing may be done to a 5 or a 7 with a times or a divide that stays whole and stays small, so beginning there would leave the first step with nothing to choose.");
  let least = app_code_expression_step_value_least();
  let most = app_code_expression_step_value_most();
  function strong_ready_is(value) {
    "a number a stronger operator may be written beside";
    let rank_most = app_code_expression_rank(value);
    let choices = app_code_expression_step_choices_strong(value, rank_most);
    let any = list_empty_not_is(choices);
    return any;
  }
  let numbers = range_from(least, most);
  let starts = list_filter(numbers, strong_ready_is);
  let start = list_random_item(starts);
  let tree = app_code_expression_step_grown_strong(start);
  function step_add(index_unused) {
    "one more operator on what is there so far";
    tree = app_code_expression_step_grown(tree);
  }
  let rest = subtract(operator_count, 1);
  each_range(rest, step_add);
  return tree;
}

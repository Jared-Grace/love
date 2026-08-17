import { app_code_expression_step_grown } from "./app_code_expression_step_grown.mjs";
import { app_code_expression_step_value_least } from "./app_code_expression_step_value_least.mjs";
import { app_code_expression_step_value_most } from "./app_code_expression_step_value_most.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each_range } from "./each_range.mjs";
import { integer_random } from "./integer_random.mjs";
export function app_code_expression_flat_random(operator_count) {
  arguments_assert(arguments, 1);
  (
    "a line of arithmetic with as many operators on it as asked for, needing no brackets, and answerable a step at a time all the way down: asked for three it gives lines like 2 + 9 / 3 - 4"
  );
  (
    "Grown from a single number outwards rather than drawn as a whole and checked afterwards. Every step is chosen from the ones that are already known to work, so a line of any length is safe by the way it was made - there is no drawing again, and so no line length at which the making might fail to finish."
  );
  (
    "Every number written on it and every number any step of it comes to is a whole number between the least and the most, and every part of it may be worked out in one order only. Those are promises of the growing rather than of the length, so a lesson may ask for two operators or five and lean on the same ones."
  );
  let least = app_code_expression_step_value_least();
  let most = app_code_expression_step_value_most();
  let start = integer_random(least, most);
  let tree = start;
  function step_add(index_unused) {
    "one more operator on what is there so far";
    tree = app_code_expression_step_grown(tree);
  }
  each_range(operator_count, step_add);
  return tree;
}

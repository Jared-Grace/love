import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_comparison_and_card_one_side(root) {
  arguments_assert(arguments, 1);
  ("one side of the && changed from a plain true or false into a comparison, worked out - the single step from the && the learner already has");
  ("The learner arrives knowing true && false. Replacing ONE operand with a comparison changes one thing; the lesson used to open on 3 < 5 && 2 < 4, which replaces both at once. The last line names the other order because the quiz asks it, and nothing has told them && may be read either way round.");
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["For ", "true && 1 < 2", ", we do ", "1 < 2", " before ", "&&"],
    ["That is ", "true", ", so ", "true && true", " is ", "true"],
    ["Either side can be the comparison: ", "1 < 2 && true"],
  ]);
}

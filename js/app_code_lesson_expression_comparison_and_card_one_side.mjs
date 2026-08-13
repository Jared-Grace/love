import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_comparison_and_card_one_side(root) {
  arguments_assert(arguments, 1);
  ("one side of the && changed from a plain true or false into a comparison, worked out - the single step from the && the learner already has");
  ("The learner arrives knowing true && false. Replacing ONE operand with a comparison changes one thing; the lesson used to open on 3 < 5 && 2 < 4, which replaces both at once. The last line names the other order because the quiz asks it, and nothing has told them && may be read either way round.");
  ("That named instead. The line above it holds three things a That could point at - true && 1 < 2, 1 < 2 and && - and the whole line is true as well as the comparison is, so the reading where That means the answer comes out true and stays undetected. That reading skips the substitution, which is the one step this card exists to show.");
  ("One line became three, each carrying one step: what the comparison is worth, what putting that value back leaves, and what the line then is. The old line did all three at once, so the middle one - true && true, the shape the learner already knows appearing where the comparison stood - was never written down at all.");
  ("Then we have, and we repeat the line to value it, is the frame the both-sides parentheses card uses for the same move. Two lessons doing one thing one way is worth more than each reading best on its own.");
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["For ", "true && 1 < 2", ", we do ", "1 < 2", " before ", "&&"],
    ["", "1 < 2", " is ", "true"],
    ["Then we have ", "true && true"],
    ["And ", "true && true", " is ", "true"],
    ["A comparison can also be on the left side of ", "&&"],
    ["", "1 < 2 && true"],
  ]);
}

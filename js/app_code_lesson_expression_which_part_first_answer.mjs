import { app_code_operator_strong_in_code } from "./app_code_operator_strong_in_code.mjs";
import { app_code_operator_part_around } from "./app_code_operator_part_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_which_part_first_answer(code) {
  arguments_assert(arguments, 1);
  ("the part of the line that has to be solved first: for 1 + 2 * 4 that is 2 * 4, and for 2 * 4 + 1 it is still 2 * 4");
  ("read back off the line rather than handed over by whatever built it. The generator arranges the line and this reads the arrangement, so the two agree because they are about the same text - handed over instead, they would be two records of one fact, and a change to how a line is arranged could leave the answer naming a part that is no longer in it");
  ("which operator is the stronger one is read off the line too, because this lesson uses either of them. One from each class is all it generates, so there is nothing to choose between within a class and no full ordering is needed here. A line with two of the stronger operators would need one, and would be a different lesson - it also raises which end groups first, which this lesson does not teach");
  let strong = app_code_operator_strong_in_code(code);
  let part = app_code_operator_part_around(code, strong);
  return part;
}

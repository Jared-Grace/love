import { app_code_operator_part_around } from "./app_code_operator_part_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
export function app_code_lesson_expression_which_part_first_answer(code) {
  arguments_assert(arguments, 1);
  ("the part of the line that has to be solved first: for 1 + 2 * 4 that is 2 * 4, and for 2 * 4 + 1 it is still 2 * 4");
  ("read back off the line rather than handed over by whatever built it. The generator arranges the line and this reads the arrangement, so the two agree because they are about the same text - handed over instead, they would be two records of one fact, and a change to how a line is arranged could leave the answer naming a part that is no longer in it");
  ("one * and one weaker operator is all this lesson generates, so there is nothing to choose between and no precedence table is needed here. A line with two strong operators would need one, and would be a different lesson - it also raises which end groups first, which this lesson does not teach");
  let strong = js_operator_asterisk_symbol();
  let part = app_code_operator_part_around(code, strong);
  return part;
}

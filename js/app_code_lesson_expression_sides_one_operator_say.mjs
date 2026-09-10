import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_sides_one_operator_say(run, sides) {
  arguments_assert(arguments, 2);
  ("why the two sides of a line go first, told for a line whose two sides hold the SAME operator: the operator is named, both of it are pointed at, and then the question of which of them goes first is asked for the run underneath to answer");
  ("It counts rather than classes. Told that the sides are arithmetic and so go before the comparison, a learner has to already know what arithmetic is and which of the symbols in front of them are it; told that / is solved before === and that there are two /, they can see both of them on the line without knowing either word.");
  ("★ A CLOSING ROW IN THE OPERATOR'S OWN WORD - when we DIVIDE two numbers they solve to the same value every time - STOOD HERE AND IS GONE, along with ",
    fn_name("js_operator_symbol_verb"),
    ", which nothing else on this line needed. It was the reason a choice between the two sides was safe, and there is no choice any more: JavaScript works out the left side of an operator before the right, so the run underneath answers the question with the left one rather than with a permission.");
  let side_symbol = property_get(sides, "side_symbol");
  let outer_symbol = property_get(sides, "outer_symbol");
  let left_code = property_get(sides, "left_code");
  let right_code = property_get(sides, "right_code");
  html_div_cycle_code(run, [
    "",
    side_symbol,
    " is solved before ",
    outer_symbol,
  ]);
  html_div_cycle_code(run, [
    "But there are two ",
    side_symbol,
    ": ",
    left_code,
    " and ",
    right_code,
  ]);
  ("the question is asked out loud before it is answered, because a learner who has only ever had one right press at a time is already looking for which of the two it is - asked, they are looking for the answer to the line below rather than for a trap");
  html_div_cycle_code(run, ["Which ", side_symbol, " do we solve first?"]);
}

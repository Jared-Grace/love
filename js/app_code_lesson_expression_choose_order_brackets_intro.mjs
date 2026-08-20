import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_brackets_intro(parent) {
  arguments_assert(arguments, 1);
  ("the sentences that say what is different about this lesson, in a card of their own");
  ("Three sentences and no more: the brackets can now go round a || , that puts the || first, and putting it first is a change rather than a restatement. The third is what stops the first two reading as a rule the learner already had - the two things being joined are both known, and only their meeting is new.");
  ("That the pair may sit at either end is not said here. It is said above the second of the two lines this screen walks, where the line under it has them at the other end, which is where the two lessons that taught brackets both say it.");
  ("Neither of the two recalled rules is said again here. This card is only ever read straight after them, and a card that repeated them would be asking the learner to check whether the words had changed.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  html_div_cycle_code(parent, [
    "Now ",
    left_bracket,
    " and ",
    right_bracket,
    " can stand around a ",
    or_symbol,
  ]);
  html_div_cycle_code(parent, [
    "The ",
    or_symbol,
    " inside them is solved before the ",
    and_symbol,
  ]);
  html_div_cycle_code(parent, ["So the brackets change which one goes first"]);
}

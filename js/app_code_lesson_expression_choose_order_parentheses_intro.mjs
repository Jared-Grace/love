import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_parentheses_intro(
  parent,
) {
  arguments_assert(arguments, 1);
  ("the sentences that say what is different about this lesson, in a card of their own");
  ("Three sentences and no more: the parentheses can now go round a || , that puts the || first, and putting it first is a change rather than a restatement. The third is what stops the first two reading as a rule the learner already had - the two things being joined are both known, and only their meeting is new.");
  ("That the pair may sit at either end is not said here. It is said above the second of the two lines this screen walks, where the line under it has them at the other end, which is where the two lessons that taught parentheses both say it.");
  ("PARENTHESES, never parentheses. The marks on the line are ( and ), and in this language [ and ] are a different symbol doing a different job - so a card that called these parentheses would be teaching a word the learner has to unlearn the first time they meet a list. The one word is used everywhere a learner can read it.");
  ("Neither of the two recalled rules is said again here. This card is only ever read straight after them, and a card that repeated them would be asking the learner to check whether the words had changed.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let left_parenthesis = js_code_parenthesis_left();
  let right_parenthesis = js_code_parenthesis_right();
  html_div_cycle_code(parent, [
    "Now ",
    left_parenthesis,
    " and ",
    right_parenthesis,
    " can stand around a ",
    or_symbol,
  ]);
  html_div_cycle_code(parent, [
    "The ",
    or_symbol,
    " inside them is solved before the ",
    and_symbol,
  ]);
  html_div_cycle_code(parent, [
    "So the parentheses change which one goes first",
  ]);
}

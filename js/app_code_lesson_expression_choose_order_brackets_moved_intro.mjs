import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_brackets_moved_intro(
  parent,
) {
  arguments_assert(arguments, 1);
  ("the sentences that say what is different about this lesson, in a card of their own");
  ("Three sentences and no more: the pair may go round either half of the line, whatever they go round is solved first, and round the && they change nothing. The third is the new one - the first two the learner already has - and it is the only place in the run where a pair of brackets is allowed to be worth nothing.");
  ("Nothing here says the answer changes when they move. The two runs above show it changing, on the same three words, and a sentence saying so as well would be asking the learner to check the words against what they have just watched.");
  let and_symbol = js_operator_and_symbol();
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  html_div_cycle_code(parent, [
    "Now ",
    left_bracket,
    " and ",
    right_bracket,
    " can go round either pair",
  ]);
  html_div_cycle_code(parent, ["Whatever they go round is solved first"]);
  html_div_cycle_code(parent, [
    "Round the ",
    and_symbol,
    " they change nothing, because the ",
    and_symbol,
    " was first anyway",
  ]);
}

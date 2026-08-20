import { app_code_lesson_expression_worked_card_two_operators } from "./app_code_lesson_expression_worked_card_two_operators.mjs";
import { app_code_lesson_expression_choose_order_brackets_either_side } from "./app_code_lesson_expression_choose_order_brackets_either_side.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_lesson_expression_brackets_or_intro(root) {
  arguments_assert(arguments, 1);
  ("the three cards above the brackets around || lesson: the rule in one sentence, then the same line carried all the way to its value with the brackets at one end and then the other");
  ("Only the rule is said again, and it is said in the words the pressing lesson said it in, with the brackets named rather than pointed at. That the marks may go there at all was the news there; here it is something the learner has already pressed their way through.");
  ("Each worked line is one the brackets change. Without them the same three words come to true, and with them they come to false, so a learner who reads past the marks gets the card wrong in front of themselves. A line that came to the same thing either way would be a card that never had to be read.");
  ("Both sides are worked rather than one of them being drawn, which is what the two lessons that taught brackets do: each says the marks may stand at either end and then works a line with them at the other end, in the same card. Drawn instead, half the visits would show the sentence with nothing beside it that moves - and half the questions ask for the side that visit never showed.");
  ("The second working is the first one turned round: the same three words, in the other order, with the brackets at the other end. Different words would leave a reader finding which of two things had changed before they could see that only one had.");
  ("The sentence between them is asked for from the pressing lesson rather than written again here, because a learner reads the two screens one after the other and a near-copy is a thing to be compared where the same words are a thing already known.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let pair = app_code_operator_code(true_word, or_symbol, true_word);
  let bracketed = js_code_wrap_parenthesis(pair);
  let whole_right = app_code_operator_code(false_word, and_symbol, bracketed);
  let rest_right = app_code_operator_code(false_word, and_symbol, true_word);
  let whole_left = app_code_operator_code(bracketed, and_symbol, false_word);
  let rest_left = app_code_operator_code(true_word, and_symbol, false_word);
  let heading_none = [];
  let heading_either =
    app_code_lesson_expression_choose_order_brackets_either_side();
  app_code_container_light_blue_cycle_code(root, [
    "The ",
    or_symbol,
    " inside ",
    left_bracket,
    " and ",
    right_bracket,
    " is solved before the ",
    and_symbol,
  ]);
  app_code_lesson_expression_worked_card_two_operators(
    root,
    heading_none,
    whole_right,
    pair,
    true_word,
    rest_right,
    false_word,
  );
  app_code_lesson_expression_worked_card_two_operators(
    root,
    heading_either,
    whole_left,
    pair,
    true_word,
    rest_left,
    false_word,
  );
}

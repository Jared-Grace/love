import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { app_code_lesson_expression_choose_order_brackets_moved_other_pair } from "./app_code_lesson_expression_choose_order_brackets_moved_other_pair.mjs";
import { app_code_lesson_expression_worked_card_two_operators } from "./app_code_lesson_expression_worked_card_two_operators.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_lesson_expression_brackets_moved_intro(root) {
  arguments_assert(arguments, 1);
  ("the three cards above the brackets around either pair lesson: the rule in one sentence, then the same three words carried all the way to their value with the marks round the first pair and then round the second");
  ("Only the rule is said again, and it is said the way the pressing lesson said it, with nothing added about the marks being movable. That they may go round either pair was the news there; here it is something the learner has already pressed their way through.");
  ("The three words are the same on both cards and only the marks move, which is the whole claim of the lesson. Different words on the second card would leave a reader finding which of two things had changed before they could see that only one had.");
  ("The first card is the one whose brackets change nothing, so the learner watches the three words answer the way the operators would have answered on their own, and then watches the very same words come out the other way once the pair is moved. Shown the other way round, the moving pair would read as the ordinary case and the harmless one as the surprise.");
  ("The false at one end and the true at the other are what make the two cards land differently. With a true at the left end or a false at the right the marks would change nothing wherever they went, and the screen would show a pair being moved for no reason a learner could see.");
  ("The sentence above the second card is asked for from the pressing lesson rather than written again here, because a learner reads the two screens one after the other and a near-copy is a thing to be compared where the same words are a thing already known.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let and_pair = app_code_operator_code(false_word, and_symbol, true_word);
  let and_bracketed = js_code_wrap_parenthesis(and_pair);
  let whole_left = app_code_operator_code(and_bracketed, or_symbol, true_word);
  let rest_left = app_code_operator_code(false_word, or_symbol, true_word);
  let or_pair = app_code_operator_code(true_word, or_symbol, true_word);
  let or_bracketed = js_code_wrap_parenthesis(or_pair);
  let whole_right = app_code_operator_code(
    false_word,
    and_symbol,
    or_bracketed,
  );
  let rest_right = app_code_operator_code(false_word, and_symbol, true_word);
  let heading_none = [];
  let heading_other =
    app_code_lesson_expression_choose_order_brackets_moved_other_pair();
  app_code_container_light_blue_cycle_code(root, [
    "Whatever is inside ",
    left_bracket,
    " and ",
    right_bracket,
    " is solved first",
  ]);
  app_code_lesson_expression_worked_card_two_operators(
    root,
    heading_none,
    whole_left,
    and_pair,
    false_word,
    rest_left,
    true_word,
  );
  app_code_lesson_expression_worked_card_two_operators(
    root,
    heading_other,
    whole_right,
    or_pair,
    true_word,
    rest_right,
    false_word,
  );
}

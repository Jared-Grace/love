import { app_code_lesson_expression_worked_card_two_operators } from "./app_code_lesson_expression_worked_card_two_operators.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_lesson_expression_brackets_or_intro(root) {
  arguments_assert(arguments, 1);
  ("the two cards above the brackets around || lesson: the rule in one sentence, then one line carried all the way to its value");
  ("Only the rule is said again, and it is said in the words the pressing lesson said it in, with the brackets named rather than pointed at. That the marks may go there at all was the news there; here it is something the learner has already pressed their way through.");
  ("The worked line is one the brackets change. Without them the same three words come to true, and with them they come to false, so a learner who reads past the marks gets the card wrong in front of themselves. A line that came to the same thing either way would be a card that never had to be read.");
  ("The brackets are shown on the right of the && here, and the questions put them on either side. One card cannot show both without showing the same working twice, and the pressing lesson has already made the point that they move.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let pair = app_code_operator_code(true_word, or_symbol, true_word);
  let bracketed = js_code_wrap_parenthesis(pair);
  let whole = app_code_operator_code(false_word, and_symbol, bracketed);
  let rest = app_code_operator_code(false_word, and_symbol, true_word);
  let rule = app_code_container_light_blue(root);
  html_div_cycle_code(rule, [
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
    whole,
    pair,
    true_word,
    rest,
    false_word,
  );
}

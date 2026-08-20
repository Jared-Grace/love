import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_lesson_expression_comparison_or_intro(root) {
  arguments_assert(arguments, 1);
  ("the two cards above the comparison inside || lesson: what is new said in one sentence, then one line carried all the way to its value");
  ("What a comparison is, and that one can stand where a true or a false stands, is not built up again. The && twin of this lesson built it a piece at a time - one side changed, then both - and a learner arriving here has read it and has since pressed their way through the same shape with a || in the middle. All that is left to say is that the same swap is allowed here.");
  ("The worked line has one side that comes out false and still comes to true, which is the whole of what || adds and the one thing an && learner will get wrong. A line with two true sides would be answered right by the habit they already have.");
  ("Both comparisons are less-than ones so that the reading of them is not what the card is about. Two different comparisons would ask a learner to hold two things at once on a card that is showing them one.");
  let symbol = js_operator_or_symbol();
  let less_than = js_operator_less_than_symbol();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let left_side = app_code_operator_code("3", less_than, "5");
  let right_side = app_code_operator_code("8", less_than, "2");
  let whole = app_code_operator_code(left_side, symbol, right_side);
  let values = app_code_operator_code(true_word, symbol, false_word);
  let what_is_new = app_code_container_light_blue(root);
  html_div_cycle_code(what_is_new, [
    "A comparison can be either side of ",
    symbol,
  ]);
  let worked = app_code_container_light_blue(root);
  html_div_cycle_code(worked, [
    "For ",
    whole,
    ", we do ",
    left_side,
    " and ",
    right_side,
    " before ",
    symbol,
  ]);
  html_div_cycle_code(worked, [
    "",
    left_side,
    " is ",
    true_word,
    " and ",
    right_side,
    " is ",
    false_word,
  ]);
  html_div_cycle_code(worked, ["So ", values, " is ", true_word]);
}

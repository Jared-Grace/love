import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_operator_code_before } from "./app_code_operator_code_before.mjs";
import { text_wrap_parenthesis } from "./text_wrap_parenthesis.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_not_twice_worked(
  parent,
) {
  "the last card of this lesson: the rewritten line taken down to its value a step at a time, in the same words every walk in this run uses - the step, the replacement, what is left, and the answer";
  "WRITTEN OUT RATHER THAN WALKED BY THE MACHINE. The walk the other lessons in this run draw takes the flat line, so its rows read !true where this lesson has just spent a card explaining !(true) - and a learner who had been shown the parentheses and then shown the same steps without them would have to work out for themselves that the two were one thing. The card that taught the rewrite is the card that has to carry it through.";
  "The rows are the walk's own wordings and in the walk's own order, so a learner arriving from the lessons behind this one is reading the shape they already know.";
  arguments_assert(arguments, 1);
  let bang = js_operator_bang_symbol();
  let word_true = js_keyword_true();
  let word_false = js_keyword_false();
  let right_code = text_wrap_parenthesis(word_true);
  let not_true_parenthesised = app_code_operator_code_before(bang, right_code);
  let right_code2 = text_wrap_parenthesis(word_false);
  let not_false_parenthesised = app_code_operator_code_before(
    bang,
    right_code2,
  );
  let not_false = app_code_operator_code_before(bang, word_false);
  html_div_cycle_code(parent, [
    "So we solve ",
    not_true_parenthesised,
    " to get ",
    word_false,
  ]);
  html_div_cycle_code(parent, [
    "We replace ",
    not_true_parenthesised,
    " with ",
    word_false,
  ]);
  html_div_cycle_code(parent, ["Then we have ", not_false_parenthesised]);
  html_div_cycle_code(parent, ["The ", bang, " is the only operator left"]);
  html_div_cycle_code(parent, [
    "So we solve ",
    not_false,
    " to get ",
    word_true,
  ]);
  html_div_cycle_code(parent, ["And the answer is ", word_true]);
}

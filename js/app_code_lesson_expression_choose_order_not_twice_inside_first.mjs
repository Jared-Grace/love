import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { app_code_operator_code_before } from "./app_code_operator_code_before.mjs";
import { text_wrap_parenthesis } from "./text_wrap_parenthesis.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_not_twice_inside_first(
  parent,
) {
  "the middle card of this lesson: the rule that the unary operator on the inside goes first, shown by writing the same line out a second way with parentheses around each part";
  "THE PARENTHESES SHOW THE ORDER, THEY ARE NOT PART OF THE LINE. The line the learner presses has none. This card writes it a second way, says in a line of its own that the two ways come to the same thing, and only then reads the order off the marks - which is the one reading a learner can check by looking rather than by being told.";
  "Both symbols here are the same symbol, so nothing about which operator is stronger could tell them apart. Nearness is the whole of it, and a pair of parentheses is what makes nearness something on the screen instead of something to remember.";
  arguments_assert(arguments, 1);
  let bang = js_operator_bang_symbol();
  let word_true = js_keyword_true();
  let not_true = app_code_operator_code_before(bang, word_true);
  let bang_bang_true = app_code_operator_code_before(bang, not_true);
  let right_code = text_wrap_parenthesis(word_true);
  let not_true_parenthesised = app_code_operator_code_before(bang, right_code);
  let right_code2 = text_wrap_parenthesis(not_true_parenthesised);
  let nested = app_code_operator_code_before(bang, right_code2);
  html_div_cycle_code(parent, ["Suppose we want to solve ", bang_bang_true]);
  html_div_cycle_code(parent, [
    "If there are multiple unary operators, the operator on the inside is solved first",
  ]);
  html_div_cycle_code(parent, [
    "For example, we could rewrite ",
    bang_bang_true,
    " as ",
    nested,
  ]);
  html_div_cycle_code(parent, [
    "",
    nested,
    " solves the same as ",
    bang_bang_true,
  ]);
  html_div_cycle_code(parent, [
    "The parentheses in ",
    nested,
    " show us the order to solve each ",
    bang,
  ]);
  html_div_cycle_code(parent, [
    "The first ",
    bang,
    " is solved last because it's on the outside of all the parentheses",
  ]);
  html_div_cycle_code(parent, [
    "The second ",
    bang,
    " is solved first because it's on the inside of the outer parentheses",
  ]);
}

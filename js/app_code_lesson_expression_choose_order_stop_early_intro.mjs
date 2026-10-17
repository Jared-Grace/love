import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_stop_early_intro(
  parent,
) {
  arguments_assert(arguments, 1);
  ("the sentences that say what is different about the stop-early lesson, in a card of their own. A draft, 2026-10-17, to go to the human before the lesson ships");
  ("Said as what JavaScript does, never as a shortcut or a speed-up: stopping early is a rule every JavaScript follows, and a learner told it is a shortcut would think the answer could depend on it being taken. The last sentence is the one the lessons before this did not need - until now both sides were solved, and the answer is the same either way on these lines");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  html_div_cycle_code(parent, [
    "JavaScript solves the left side of ",
    and_symbol,
    " and ",
    or_symbol,
    " first",
  ]);
  html_div_cycle_code(parent, [
    "If the left side of ",
    or_symbol,
    " is ",
    true_word,
    ", the answer is ",
    true_word,
    ", so JavaScript stops early",
  ]);
  html_div_cycle_code(parent, [
    "If the left side of ",
    and_symbol,
    " is ",
    false_word,
    ", the answer is ",
    false_word,
    ", so JavaScript stops early",
  ]);
  html_div_cycle_code(parent, [
    "Stopping early gives the same answer as solving both sides",
  ]);
}

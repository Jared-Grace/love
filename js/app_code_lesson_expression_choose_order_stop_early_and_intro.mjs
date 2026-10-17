import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_stop_early_and_intro(
  parent,
) {
  arguments_assert(arguments, 1);
  ("the sentences that say what is different about the stop-early-on-&& lesson, in a card of their own. A draft, 2026-10-17, to go to the human before the lesson ships");
  ("Written to mirror, line for line, the wording the human wrote for the || lesson, with false in place of true and && in place of ||, so a learner who read that one meets the same steps here");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let dots = "...";
  let stops = [false_word, " ", and_symbol, " ", dots].join("");
  let skipped = ["(", true_word, " ", or_symbol, " ", true_word, ")"].join("");
  let skipped_bare = [true_word, " ", or_symbol, " ", true_word].join("");
  let whole = [false_word, " ", and_symbol, " ", skipped].join("");
  html_div_cycle_code(parent, ["Suppose we have: ", stops]);
  html_div_cycle_code(parent, [
    "Then no matter what ",
    dots,
    " is, the answer to ",
    stops,
    " is always ",
    false_word,
  ]);
  html_div_cycle_code(parent, [
    "So that's how JavaScript solves ",
    stops,
    " :",
  ]);
  html_div_cycle_code(parent, [
    "When the left side of ",
    and_symbol,
    " is ",
    false_word,
    ", JavaScript never solves its right side",
  ]);
  html_div_cycle_code(parent, ["So when JavaScript solves ", whole]);
  html_div_cycle_code(parent, [
    "JavaScript treats the ",
    skipped,
    " as ",
    dots,
  ]);
  html_div_cycle_code(parent, [
    "And JavaScript sees ",
    stops,
    " and completely skips the ",
    dots,
    " ",
    skipped,
  ]);
  html_div_cycle_code(parent, ["JavaScript solves the answer as ", false_word]);
  html_div_cycle_code(parent, [
    "And JavaScript never solves the ",
    skipped_bare,
  ]);
}

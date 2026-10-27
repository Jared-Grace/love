import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_stop_early_or_intro(
  parent,
) {
  arguments_assert(arguments, 1);
  ("the sentences that say what is different about the stop-early-on-|| lesson, in a card of their own");
  ("The human's own wording, 2026-10-17, kept word for word as they laid the page out the second time, which opens on what true || true and true || false come to rather than on Suppose we have: true || .... The ... stands for a right side not looked at yet, which is what lets the answer be said before it is read");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let dots = "...";
  let stops = [true_word, " ", or_symbol, " ", dots].join("");
  let skipped = [false_word, " ", and_symbol, " ", false_word].join("");
  let whole = [true_word, " ", or_symbol, " ", skipped].join("");
  let skipped_wrapped = ["(", skipped, ")"].join("");
  let with_true = [true_word, " ", or_symbol, " ", true_word].join("");
  let with_false = [true_word, " ", or_symbol, " ", false_word].join("");
  app_code_div_cycle_code(parent, ["So ", with_true, " is ", true_word]);
  app_code_div_cycle_code(parent, ["And ", with_false, " is ", true_word]);
  app_code_div_cycle_code(parent, [
    "For ",
    stops,
    " , it doesn't matter what the ",
    dots,
    " is : ",
    stops,
    " is always ",
    true_word,
  ]);
  app_code_div_cycle_code(parent, [
    "So that's how JavaScript solves ",
    stops,
    " :",
  ]);
  app_code_div_cycle_code(parent, [
    "When the left side of ",
    or_symbol,
    " is ",
    true_word,
    ", JavaScript never solves its right side",
  ]);
  app_code_div_cycle_code(parent, ["So when JavaScript solves ", whole]);
  app_code_div_cycle_code(parent, [
    "JavaScript treats the ",
    skipped,
    " as ",
    dots,
  ]);
  app_code_div_cycle_code(parent, [
    "And JavaScript sees ",
    stops,
    " and completely skips the ",
    dots,
    " ",
    skipped_wrapped,
  ]);
  app_code_div_cycle_code(parent, [
    "JavaScript solves the answer as ",
    true_word,
  ]);
  app_code_div_cycle_code(parent, [
    "And JavaScript never solves the ",
    skipped,
  ]);
}

import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_stop_early_both_intro(
  parent,
) {
  arguments_assert(arguments, 1);
  ("the sentences that say what is different about stopping early with && and || on one line, in a card of their own. A draft, 2026-10-17, to go to the human before the lesson ships");
  ("Written in the steps of the human's own wording for the || lesson: what JavaScript sees, what it treats as ..., what it skips. The one new thing said is that && still goes before ||, so on false && true || true the && is solved first and the skip is one word, true, and the || is then solved as usual. Not picked: walking the line as well, which the human took out of the || lesson");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let dots = "...";
  let and_stops = [false_word, " ", and_symbol, " ", dots].join("");
  let and_part = [false_word, " ", and_symbol, " ", true_word].join("");
  let whole = [and_part, " ", or_symbol, " ", true_word].join("");
  let left_over = [false_word, " ", or_symbol, " ", true_word].join("");
  app_code_div_cycle_code(parent, [
    "The ",
    and_symbol,
    " is still solved before the ",
    or_symbol,
  ]);
  app_code_div_cycle_code(parent, ["So when JavaScript solves ", whole]);
  app_code_div_cycle_code(parent, ["JavaScript solves ", and_part, " first"]);
  app_code_div_cycle_code(parent, [
    "JavaScript treats the ",
    true_word,
    " as ",
    dots,
  ]);
  app_code_div_cycle_code(parent, [
    "And JavaScript sees ",
    and_stops,
    " and completely skips the ",
    dots,
    " (",
    true_word,
    ")",
  ]);
  app_code_div_cycle_code(parent, [
    "JavaScript solves ",
    and_part,
    " as ",
    false_word,
  ]);
  app_code_div_cycle_code(parent, ["That leaves ", left_over]);
  app_code_div_cycle_code(parent, [
    "When the left side of ",
    or_symbol,
    " is ",
    false_word,
    ", JavaScript solves its right side",
  ]);
  app_code_div_cycle_code(parent, [
    "JavaScript solves the answer as ",
    true_word,
  ]);
}

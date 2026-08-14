import { fn_name } from "./fn_name.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_not_parenthesis_wrapped } from "./js_code_not_parenthesis_wrapped.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
export function app_code_lesson_expression_not_equal_same_intro(root) {
  "the two cards above the lesson matching a !== against a ! around an ===: first what each of the two comparison symbols asks, and that one therefore gives the opposite answer to the other; then, on a second card, what a ! does spelled out on true and false themselves before it is called an opposite - so the word opposite is earned in both halves before the two spellings are put together.";
  ("It stands in its own file for the same reason as ",
    fn_name("app_code_lesson_expression_not_comparison_intro"),
    ": a card is a different kind of thing from the questions a lesson draws, and the lesson was over the work-size ceiling with the card inside it.");
  let different_symbol = js_operator_bang_double_equal_symbol();
  let same_symbol = js_operator_triple_equal_symbol();
  let bang_symbol = js_operator_bang_symbol();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let three = "3";
  let five = "5";
  let short = app_code_operator_code(three, different_symbol, five);
  let inner = app_code_operator_code(three, same_symbol, five);
  let long = js_code_not_parenthesis_wrapped(inner);
  let asks = app_code_container_light_blue(root);
  html_div_cycle_code(asks, [
    "",
    short,
    " asks if the two sides are different",
  ]);
  html_div_cycle_code(asks, ["", inner, " asks if the two sides are the same"]);
  html_div_cycle_code(asks, [
    "So ",
    different_symbol,
    " gives the opposite answer to ",
    same_symbol,
  ]);
  let joins = app_code_container_light_blue(root);
  html_div_cycle_code(joins, [
    "",
    true_word,
    " and ",
    false_word,
    " are opposites",
  ]);
  html_div_cycle_code(joins, [
    "A ",
    bang_symbol,
    " changes ",
    true_word,
    " to ",
    false_word,
    " and ",
    false_word,
    " to ",
    true_word,
  ]);
  html_div_cycle_code(joins, [
    "So, ",
    bang_symbol,
    " gives the opposite answer too",
  ]);
  html_div_cycle_code(joins, [
    "So ",
    short,
    " and ",
    long,
    " always give the same answer",
  ]);
  html_div_cycle_code(joins, ["Both are ways to write the same thing"]);
}

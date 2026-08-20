import { app_code_lesson_expression_worked_card_not } from "./app_code_lesson_expression_worked_card_not.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_not } from "./js_code_not.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_not_comparison_intro(root) {
  "the two cards above the ! around a comparison lesson: how far a ! applies, then the same thing shown on one instance, then the target line built a piece at a time - brackets around the comparison, then the ! in front of them, then the finished line - and finally one worked example carried all the way to its value.";
  "Built rather than presented, so the finished shape arrives as the last step of something the reader watched happen rather than as a new thing to take on trust.";
  "It says what the ! would apply to without the brackets and stops there. It does not say what !3 works out to, because that answer needs a number counted as true or false, which no lesson has taught and this one is not the place to teach. Naming what the ! applies to is enough to motivate the brackets, and it is true.";
  ("It stands in its own file because the lesson holding it was over the work-size ceiling with it inside, and because a card is a different kind of thing from the questions the lesson draws - the same split as ",
    fn_name("app_code_lesson_cross_precedence_intro"),
    ".");
  let symbol = js_operator_bang_symbol();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let equal_symbol = js_operator_triple_equal_symbol();
  let three = "3";
  let five = "5";
  let comparison = app_code_operator_code(three, equal_symbol, five);
  let open = js_code_parenthesis_left();
  let close = js_code_parenthesis_right();
  let bracketed = js_code_wrap_parenthesis(comparison);
  let whole = js_code_not(bracketed);
  let not_three = js_code_not(three);
  let bare = text_combine_multiple([not_three, " ", equal_symbol, " ", five]);
  let not_false = js_code_not(false_word);
  let reach = app_code_container_light_blue(root);
  html_div_cycle_code(reach, [
    "A ",
    symbol,
    " applies only to what's right after it",
  ]);
  html_div_cycle_code(reach, [
    "For example, for ",
    bare,
    ", the ",
    symbol,
    " only applies to the ",
    three,
  ]);
  html_div_cycle_code(reach, [
    "To apply the ",
    symbol,
    " to ",
    comparison,
    ", first we put ",
    open,
    " and ",
    close,
    " around ",
    comparison,
    " to get ",
    bracketed,
  ]);
  html_div_cycle_code(reach, [
    "Then we put the ",
    symbol,
    " in front of the ",
    bracketed,
  ]);
  html_div_cycle_code(reach, ["And then we have: ", whole]);
  app_code_lesson_expression_worked_card_not(
    root,
    whole,
    comparison,
    false_word,
    not_false,
    true_word,
  );
}

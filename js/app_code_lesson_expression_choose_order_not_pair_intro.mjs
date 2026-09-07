import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { js_code_not_parenthesis_wrapped } from "./js_code_not_parenthesis_wrapped.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_not_pair_intro(parent) {
  arguments_assert(arguments, 1);
  ("the sentences that say what is different about this lesson, in a card of their own");
  ("It opens with two lines that can be written out rather than with a rule about them. A learner who has just been shown one such line worked all the way down reads !(true && true) and !(false || true) as two more of the same thing, and the sentence that follows is then a description of two lines already in front of them instead of a claim they have to take on trust.");
  ("Both joining marks get a line of their own, because a card showing only the && one would leave a learner to guess whether the || is allowed there too - and guessing is the one thing a card above a run must not ask for.");
  ("Then the reach and the order, in that order and as two sentences rather than one. The reach says what the ! applies to; the order says when it is applied. They are different facts, a learner can hold the first and still get the second wrong, and a single sentence carrying both lets the second slip past as though it followed from the first.");
  ("Said as what the ! applies to rather than as a rule about strength. A learner who has been told the ! is applied to the result of solving the parentheses can see for themselves why it cannot go first, and they are reading the same rule they have read on every line before this one - a part is ready when nothing is left inside it.");
  ("PARENTHESES, never brackets. The marks on the line are ( and ), and in this language [ and ] are a different symbol doing a different job - so a card that called these brackets would be teaching a word the learner has to unlearn the first time they meet a list.");
  let symbol = js_operator_bang_symbol();
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let and_pair = app_code_operator_code(true_word, and_symbol, true_word);
  let or_pair = app_code_operator_code(false_word, or_symbol, true_word);
  let and_whole = js_code_not_parenthesis_wrapped(and_pair);
  let or_whole = js_code_not_parenthesis_wrapped(or_pair);
  html_div_cycle_code(parent, ["We can write ", and_whole]);
  html_div_cycle_code(parent, ["And we can write ", or_whole]);
  html_div_cycle_code(parent, [
    "So the ",
    symbol,
    " can be in front of a whole ",
    and_symbol,
    " or ",
    or_symbol,
    " inside parenthesis",
  ]);
  html_div_cycle_code(parent, [
    "",
    symbol,
    " in front of parenthesis means ",
    symbol,
    " applies to the entire parenthesis",
  ]);
  html_div_cycle_code(parent, [
    "So the parenthesis is solved, first, and then the ",
    symbol,
    " is applied to the result of solving the parenthesis",
  ]);
}

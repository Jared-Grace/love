import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
export function app_code_lesson_expression_choose_order_not_twice_rewritten_texts() {
  "the characters of the rewritten line !(!(true)), in order, one to a piece";
  "ONE PLACE THE LINE IS SPELLED, because this card shows it twice - once plain and once with the colours laid on - and the whole point of the pair is that they are the same line. Spelled twice they could come apart, and a learner told to compare two lines that quietly differ is being taught something false with nothing going red.";
  "Pieces rather than one string, because the coloured showing needs to put a background on some of them and not others, and that can only be done to a piece that exists on its own. The plain showing joins them back up.";
  arguments_assert(arguments, 0);
  let bang = js_operator_bang_symbol();
  let word_true = js_keyword_true();
  let left = js_code_parenthesis_left();
  let right = js_code_parenthesis_right();
  let texts = [bang, left, bang, left, word_true, right, right];
  return texts;
}

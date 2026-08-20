import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
export function app_code_lesson_expression_choose_order_brackets_either_side() {
  arguments_assert(arguments, 0);
  ("the row saying the brackets may stand on either side of the &&, ready to be written above the second of two worked lines");
  ("It is the sentence the first brackets lesson ended on, in the same words, about a * rather than an && - and the lesson after that said it again about a === . A learner recognises a sentence they have already read in the second it takes, and stops to compare a near-copy against it.");
  ("It is handed back rather than written onto a card, because the two lessons using it put it in two different places: one above a line about to be walked a step at a time, the other above a line worked straight through.");
  let and_symbol = js_operator_and_symbol();
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  let words = [
    "The ",
    left_bracket,
    " and ",
    right_bracket,
    " can be on either side of the ",
    and_symbol,
  ];
  return words;
}

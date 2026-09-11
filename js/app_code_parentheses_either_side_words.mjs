import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
export function app_code_parentheses_either_side_words(symbol) {
  arguments_assert(arguments, 1);
  ("the row saying the parentheses may stand on either side of an operator, ready to be written onto a card: the operator it is said about is handed in");
  ("Three lessons say this sentence, about three different operators - a times, an && , and a times again a press at a time - and they were saying it in three places in the same breath. A learner recognises a sentence they have already read in the second it takes, and stops to compare a near-copy against it, so the three must stay word-identical and the only way to make that unbreakable is to hold the words in one place.");
  ("It is handed back rather than written onto a card, because the lessons using it put it in different places: above a line about to be walked a step at a time, and at the end of a card worked straight through.");
  let left_parenthesis = js_code_parenthesis_left();
  let right_parenthesis = js_code_parenthesis_right();
  let words = [
    "The ",
    left_parenthesis,
    " and ",
    right_parenthesis,
    " can be on either side of the ",
    symbol,
  ];
  return words;
}

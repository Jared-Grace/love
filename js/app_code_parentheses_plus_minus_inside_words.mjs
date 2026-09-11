import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
export function app_code_parentheses_plus_minus_inside_words(lead) {
  arguments_assert(arguments, 1);
  ("the home title of a lesson about a + or a - gathered by ( and ) among numbers, with whatever the lesson puts in front of it handed in");
  ("Two lessons wear this title: one presses the line apart a part at a time and one asks what the whole line comes to, and they are next to each other on the home list. A learner picking up where they left off tells those two apart by the one word in front - so every other word has to be the same word, and holding them here is what makes that unbreakable rather than watched.");
  ("The lead is handed in rather than the two titles being told apart here, because what a lesson calls itself is the lesson's own to say - and the pressing one says Solve, which is the word every pressing lesson in this course is named by.");
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let left_parenthesis = js_code_parenthesis_left();
  let right_parenthesis = js_code_parenthesis_right();
  let words = [
    lead,
    plus,
    " / ",
    minus,
    " inside ",
    left_parenthesis,
    " and ",
    right_parenthesis,
  ];
  return words;
}

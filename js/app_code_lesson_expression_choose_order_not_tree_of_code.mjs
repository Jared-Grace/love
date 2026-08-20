import { app_code_lesson_expression_choose_order_not_tree_of_code_generic } from "./app_code_lesson_expression_choose_order_not_tree_of_code_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { number_from_text } from "./number_from_text.mjs";
export function app_code_lesson_expression_choose_order_not_tree_of_code(code) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: !(3 < 5) gives back the shape whose ! holds the whole comparison");
  ("Taking the line apart is its neighbour lesson's job as much as this one's and is done there. What is left here is what the two outer words mean: this lesson writes a number at each end, so each is read back as the number it spells.");
  ("A word that is not a number answers loudly rather than quietly. Every run of digits anywhere in the line used to be gathered up instead, which hands back a shorter list when a word is not a number at all and leaves an end of the shape standing at nothing - a shape that says something, wrongly, rather than a reading that refuses.");
  let tree = app_code_lesson_expression_choose_order_not_tree_of_code_generic(
    code,
    parts_of_words,
  );
  return tree;
  function parts_of_words(words) {
    "the two numbers and the comparison between them, read off the line's three words";
    let word = list_get(words, 0);
    let word2 = list_get(words, 2);
    let parts = {
      left: number_from_text(word),
      symbol: list_get(words, 1),
      right: number_from_text(word2),
    };
    return parts;
  }
}

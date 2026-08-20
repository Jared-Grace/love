import { app_code_lesson_expression_choose_order_not_tree_of_code_generic } from "./app_code_lesson_expression_choose_order_not_tree_of_code_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_truth_of } from "./js_keyword_truth_of.mjs";
import { list_get } from "./list_get.mjs";
export function app_code_lesson_expression_choose_order_not_pair_tree_of_code(
  code,
) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: !(true && false) gives back the shape whose ! holds the whole of the && and everything under it");
  ("Taking the line apart is its neighbour lesson's job as much as this one's and is done there. What is left here is what the two outer words mean: this lesson writes the word true or the word false at each end, so each is read as the truth it spells.");
  ("Which of the two operators it was is read straight off the middle word rather than worked out again. The maker drew it, and a reader that drew its own would build a shape saying something the printed line does not say about half the lines it was handed.");
  let tree = app_code_lesson_expression_choose_order_not_tree_of_code_generic(
    code,
    parts_of_words,
  );
  return tree;
  function parts_of_words(words) {
    "the two truths and the operator between them, read off the line's three words";
    let word = list_get(words, 0);
    let word2 = list_get(words, 2);
    let parts = {
      left: js_keyword_truth_of(word),
      symbol: list_get(words, 1),
      right: js_keyword_truth_of(word2),
    };
    return parts;
  }
}

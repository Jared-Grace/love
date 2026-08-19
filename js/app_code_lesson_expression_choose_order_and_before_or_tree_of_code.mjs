import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { equal } from "./equal.mjs";
export function app_code_lesson_expression_choose_order_and_before_or_tree_of_code(
  code,
) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: false && true || true gives back the shape whose && holds the first two and whose || holds what that comes to");
  ("The quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("Reading a line of this lesson's own making is safe because the lesson makes only one kind: a true or a false, an operator, a true or a false, a second operator, and one more. Nothing is ever bracketed, so the writing is five words with a space between each, and the same file builds the shape either way.");
  ("Five words, said out loud as an assertion, so a line of some other shape fed in here is refused where it arrives rather than being taken apart into a shape that quietly means something else.");
  ("Each word is read as a truth by asking whether it is the word true, and every other word this lesson writes at that place is the word false, so nothing else can be mistaken for either.");
  let words = text_split_space(code);
  list_size_assert(words, 5);
  let word_true = js_keyword_true();
  function truth_of(index) {
    "the true or the false one of the line's five words spells";
    let word = list_get(words, index);
    let truth = equal(word, word_true);
    return truth;
  }
  let left_truth = truth_of(0);
  let and_symbol = list_get(words, 1);
  let middle_truth = truth_of(2);
  let or_symbol = list_get(words, 3);
  let right_truth = truth_of(4);
  let tree = app_code_expression_node_left_operator_first(
    left_truth,
    and_symbol,
    middle_truth,
    or_symbol,
    right_truth,
  );
  return tree;
}

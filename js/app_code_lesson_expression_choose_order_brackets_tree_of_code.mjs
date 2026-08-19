import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_replace_multiple_to } from "./text_replace_multiple_to.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { app_code_lesson_expression_choose_order_brackets_expression_parts } from "./app_code_lesson_expression_choose_order_brackets_expression_parts.mjs";
export function app_code_lesson_expression_choose_order_brackets_tree_of_code(
  code,
) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: false && (true || true) gives back the shape whose || holds the last two and whose && holds what that comes to");
  ("The quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("The two brackets are taken out before the words are counted rather than being read as part of them. They say nothing this reading needs: this lesson writes one kind of line only, and in that one kind the brackets can only ever be round the last two words. Left in, they would be stuck to the words either side of them and every word would have to be cleaned of them one at a time.");
  ("Five words, said out loud as an assertion, so a line of some other shape fed in here is refused where it arrives rather than being taken apart into a shape that quietly means something else.");
  ("Each word is read as a truth by asking whether it is the word true, and every other word this lesson writes at that place is the word false, so nothing else can be mistaken for either.");
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  let brackets = [left_bracket, right_bracket];
  let nothing = text_empty();
  let bare = text_replace_multiple_to(code, brackets, nothing);
  let words = text_split_space(bare);
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
  let inner_left_truth = truth_of(2);
  let or_symbol = list_get(words, 3);
  let inner_right_truth = truth_of(4);
  let tree = app_code_lesson_expression_choose_order_brackets_expression_parts(
    left_truth,
    and_symbol,
    inner_left_truth,
    or_symbol,
    inner_right_truth,
  );
  return tree;
}

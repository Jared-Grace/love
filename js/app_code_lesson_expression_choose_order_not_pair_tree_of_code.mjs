import { app_code_expression_node_not_of_parts } from "./app_code_expression_node_not_of_parts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_keyword_truth_of } from "./js_keyword_truth_of.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { list_get } from "./list_get.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_wrapped_inner } from "./text_wrapped_inner.mjs";
export function app_code_lesson_expression_choose_order_not_pair_tree_of_code(
  code,
) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: !(true && false) gives back the shape whose ! holds the whole of the && and everything under it");
  ("The quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("Reading a line of this lesson's own making is safe because the lesson makes only one kind: a ! , an opening bracket, a true or a false, an operator, a true or a false, and a closing bracket. The brackets are always there, because a ! is worked out before either of those operators and so a shape that says otherwise can only be printed with them.");
  ("The two ends are taken off by asking for what stands between them, which hands back nothing at all when the line does not have them - and nothing splits into one word rather than three, so the assertion below refuses it. A line of some other shape is turned away where it arrives rather than taken apart into a shape that quietly means something else.");
  ("Which of the two operators it was is read straight off the middle word rather than worked out again. The maker drew it, and a reader that drew its own would build a shape saying something the printed line does not say about half the lines it was handed.");
  let bang = js_operator_bang_symbol();
  let left_bracket = js_code_parenthesis_left();
  let opening = text_combine(bang, left_bracket);
  let closing = js_code_parenthesis_right();
  let inner = text_wrapped_inner(code, opening, closing);
  let words = text_split_space(inner);
  list_size_assert(words, 3);
  let parts = {
    left: js_keyword_truth_of(list_get(words, 0)),
    symbol: list_get(words, 1),
    right: js_keyword_truth_of(list_get(words, 2)),
  };
  let tree = app_code_expression_node_not_of_parts(parts);
  return tree;
}

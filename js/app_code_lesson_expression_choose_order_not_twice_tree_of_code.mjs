import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { js_keyword_truth_of } from "./js_keyword_truth_of.mjs";
import { app_code_expression_node_before } from "./app_code_expression_node_before.mjs";
export function app_code_lesson_expression_choose_order_not_twice_tree_of_code(
  code,
) {
  "$plain code";
  "the shape behind a line this lesson printed, worked out again from the line itself: !!true gives back the shape whose outer ! holds the inner one, which holds the word";
  "THE LINE IS READ BACK RATHER THAN REMEMBERED, for the same reason its neighbours read theirs back: the quiz hands its question over as text, and a review saves that text to ask again after the page has been loaded afresh. A shape kept beside the line would have been forgotten by then, and the lesson would throw where a learner was owed a question.";
  "Reading a line of this lesson's own making is safe because it makes only one kind: two ! symbols and then the word true or the word false. There are no parentheses anywhere in it - a ! is worked out before every operator these lessons know, and there is no operator here at all - so nothing has to be taken off either end.";
  "The two symbols are taken off one at a time by asking for the line without them, which refuses a line that does not start with them rather than quietly reading the rest as though it did.";
  arguments_assert(arguments, 1);
  let symbol = js_operator_bang_symbol();
  let both = text_combine(symbol, symbol);
  let word = text_prefix_without(code, both);
  let truth = js_keyword_truth_of(word);
  let inner = app_code_expression_node_before(symbol, truth);
  let tree = app_code_expression_node_before(symbol, inner);
  return tree;
}

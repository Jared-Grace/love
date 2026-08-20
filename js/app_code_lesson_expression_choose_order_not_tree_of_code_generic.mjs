import { app_code_expression_node_not_of_parts } from "./app_code_expression_node_not_of_parts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_wrapped_inner } from "./text_wrapped_inner.mjs";
export function app_code_lesson_expression_choose_order_not_tree_of_code_generic(
  code,
  parts_of_words,
) {
  arguments_assert(arguments, 2);
  ("the shape behind a line one of the not lessons printed, worked out again from the line itself: the ! holds the whole of what stands inside its brackets, and what that inside is made of is the caller's to say.");
  ("THE LINE IS READ BACK RATHER THAN REMEMBERED. The quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("Reading a line of these lessons' own making is safe because they make only one kind: a ! , an opening bracket, one word, an operator, one more word, and a closing bracket. The brackets are always there, because a ! is worked out before either kind of operator and so a shape that says otherwise can only be printed with them.");
  ("The two ends are taken off by asking for what stands between them, which hands back nothing at all when the line does not have them - and nothing splits into one word rather than three, so the assertion below refuses it. A line of some other shape is turned away where it arrives rather than taken apart into a shape that quietly means something else.");
  ("WHAT THE THREE WORDS MEAN IS THE ONLY THING THE TWO LESSONS DIFFER BY: one reads its outer pair as the words true and false, the other reads them as numbers. Everything above was written twice and said the same thing twice.");
  let bang = js_operator_bang_symbol();
  let left_bracket = js_code_parenthesis_left();
  let opening = text_combine(bang, left_bracket);
  let closing = js_code_parenthesis_right();
  let inner = text_wrapped_inner(code, opening, closing);
  let words = text_split_space(inner);
  list_size_assert(words, 3);
  let parts = parts_of_words(words);
  let tree = app_code_expression_node_not_of_parts(parts);
  return tree;
}

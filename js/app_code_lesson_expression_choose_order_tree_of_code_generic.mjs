import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_replace_multiple_to } from "./text_replace_multiple_to.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { equal } from "./equal.mjs";
import { js_two_operator_line_parts } from "./js_two_operator_line_parts.mjs";
export function app_code_lesson_expression_choose_order_tree_of_code_generic(
  code,
  expression_parts,
) {
  "the shape behind a line one of these lessons printed, worked out again from the line itself, hung together the way the lesson that printed it hangs its lines together.";
  "THE LINE IS READ BACK RATHER THAN REMEMBERED. The quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.";
  "Reading a line of these lessons' own making is safe because they make only one kind: a true or a false, an operator, a true or a false, a second operator, and one more. So the writing is five words with a space between each, and the same file builds the shape either way.";
  "Any brackets are taken out before the words are counted rather than being read as part of them. They say nothing this reading needs - in the one kind of line these lessons write, brackets can only ever be round the last two words, and the lesson that hands in the bracketed hanging is the one that put them there. Left in, they would be stuck to the words either side of them and every word would have to be cleaned of them one at a time. A line with none is handed back unchanged, so the lesson that never brackets pays nothing for this.";
  "Five words, said out loud as an assertion, so a line of some other shape fed in here is refused where it arrives rather than being taken apart into a shape that quietly means something else.";
  "Each word is read as a truth by asking whether it is the word true, and every other word these lessons write at that place is the word false, so nothing else can be mistaken for either.";
  "HOW THE PARTS HANG TOGETHER IS THE ONLY THING THE TWO LESSONS DIFFER BY: one lets the operators decide the shape and the other puts the last two inside brackets. Everything above was written twice and said the same thing twice.";
  arguments_assert(arguments, 2);
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  let brackets = [left_bracket, right_bracket];
  let nothing = text_empty();
  let bare = text_replace_multiple_to(code, brackets, nothing);
  let words = text_split_space(bare);
  list_size_assert(words, 5);
  let word_true = js_keyword_true();
  let parts = js_two_operator_line_parts(words, truth_of);
  let tree = expression_parts(
    parts.left,
    parts.first_operator,
    parts.middle,
    parts.second_operator,
    parts.right,
  );
  return tree;
  function truth_of(word) {
    "the true or the false one of the line's words spells";
    let truth = equal(word, word_true);
    return truth;
  }
}

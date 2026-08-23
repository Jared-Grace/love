import { app_code_lesson_expression_choose_order_both_sides_above_arithmetic } from "./app_code_lesson_expression_choose_order_both_sides_above_arithmetic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_both_sides_expression_same_symbol } from "./app_code_lesson_expression_choose_order_both_sides_expression_same_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { noop } from "./noop.mjs";
export function app_code_lesson_expression_choose_order_both_sides_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the lesson whose lines all have === in the middle: one such line worked all the way through, and nothing after it");
  ("The run is done on a TRUE line, because a true line is the one with something to say: two sides that look nothing alike landing on the same number. A false line would be worked through just as correctly and would show the learner nothing they could not have guessed from the writing.");
  ("Its line has the SAME arithmetic operator on both sides, so the run can count that operator out loud - there are two of these, which one first - which is the question the card below is about to ask. A line with two different operators can only be talked about by naming the kind they belong to, and a kind is a word the learner has to be carrying already.");
  ("Nothing closes the screen. It used to end on a sentence saying that one line now holds both kinds of operator and so some parts come to a number and the last to a true or a false - which is a second lesson, said in the vocabulary of kinds, standing under a run that has just avoided needing it. The run ends on the line coming to true, and that is the whole of what the screen has to show.");
  let want_true = true;
  let outer_symbol = js_operator_triple_equal_symbol();
  let tree =
    app_code_lesson_expression_choose_order_both_sides_expression_same_symbol(
      want_true,
      outer_symbol,
    );
  app_code_lesson_expression_choose_order_both_sides_above_arithmetic(
    root,
    tree,
    noop,
  );
}

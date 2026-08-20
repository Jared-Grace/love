import { app_code_operator_truths_wanted_nested } from "./app_code_operator_truths_wanted_nested.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
export function app_code_lesson_expression_choose_order_brackets_expression(
  want_true,
  brackets_left,
) {
  arguments_assert(arguments, 2);
  ("a line with a bracketed || on one side of an && , built as a shape so the quiz can work one operator out at a time: false && (true || true), or (true || false) && true");
  ("The three trues and falses are chosen from the outside in, the same way the lesson before it chooses them. What the whole line has to come to says what the && needs on each side of it, and what the && needs on the bracketed side says what the || has to come to, which in turn says what stands either side of the ||. So neither operator is asked what it means - each is asked which pairs reach the answer wanted.");
  ("The || is the one inside the brackets rather than the && , because that is the pairing where the brackets change something. An && in brackets beside a || would print with its brackets and be solved first either way, so a learner could read past the brackets and still be right every time.");
  ("Which side the brackets fall on is handed in rather than settled here, and it has to move from line to line however it is settled. Left always on the same side, the answer would be at a fixed place on the line and a learner could press it right every time by position - which is exactly the reading this lesson exists to replace.");
  ("It is handed in because the two lessons drawing on this maker cannot move it the same way. One asks which operator goes first, and the answer to that is the bracketed one whatever the line comes to, so the side may simply take turns. The other asks what the line comes to, so a side taking turns beside an answer taking turns would hand a learner a rule pairing the two, and it draws instead.");
  ("The line prints with brackets in it and nothing here writes them: || is weaker than && , so a || standing beside an && can only mean what it says with brackets round it, and the helper that prints the line reads that off the shape. Written by hand they could disagree with the shape, and the line a learner presses would be a different line from the one being solved.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  if (brackets_left) {
    ("the || gathers first and stands leftmost, so what it comes to is what the && finds on its left");
    let truths = app_code_operator_truths_wanted_nested(
      and_symbol,
      or_symbol,
      want_true,
      brackets_left,
    );
    let first_truth = list_get(truths, 0);
    let second_truth = list_get(truths, 1);
    let alone_truth = list_get(truths, 2);
    let tree_left = app_code_expression_node_left_operator_first(
      first_truth,
      or_symbol,
      second_truth,
      and_symbol,
      alone_truth,
    );
    return tree_left;
  }
  ("the || gathers first and stands rightmost, so what it comes to is what the && finds on its right");
  let truths_right = app_code_operator_truths_wanted_nested(
    and_symbol,
    or_symbol,
    want_true,
    brackets_left,
  );
  let alone_truth_right = list_get(truths_right, 0);
  let first_truth_right = list_get(truths_right, 1);
  let second_truth_right = list_get(truths_right, 2);
  let tree_right = app_code_expression_node_right_operator_first(
    alone_truth_right,
    and_symbol,
    first_truth_right,
    or_symbol,
    second_truth_right,
  );
  return tree_right;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_operator_truths_wanted } from "./app_code_operator_truths_wanted.mjs";
import { list_get } from "./list_get.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
export function app_code_lesson_expression_choose_order_brackets_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a line with a bracketed || on one side of an && , built as a shape so the quiz can work one operator out at a time: false && (true || true), or (true || false) && true");
  ("The three trues and falses are chosen from the outside in, the same way the lesson before it chooses them. What the whole line has to come to says what the && needs on each side of it, and what the && needs on the bracketed side says what the || has to come to, which in turn says what stands either side of the ||. So neither operator is asked what it means - each is asked which pairs reach the answer wanted.");
  ("The || is the one inside the brackets rather than the && , because that is the pairing where the brackets change something. An && in brackets beside a || would print with its brackets and be solved first either way, so a learner could read past the brackets and still be right every time.");
  ("Which side the brackets fall on is drawn, and that is what stops the lesson being passable without reading them. Left always on the same side, the answer would be at a fixed place on the line and a learner could press it right every time by position - which is exactly the reading this lesson exists to replace.");
  ("Drawn rather than taken in turns, because the answer is already taken in turns: a side that changed every question would change in step with the answer, and a learner would have a rule saying which of the two buttons to press without solving anything.");
  ("The line prints with brackets in it and nothing here writes them: || is weaker than && , so a || standing beside an && can only mean what it says with brackets round it, and the helper that prints the line reads that off the shape. Written by hand they could disagree with the shape, and the line a learner presses would be a different line from the one being solved.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let outer = app_code_operator_truths_wanted(and_symbol, want_true);
  let sides = [true, false];
  let brackets_left = list_random_item(sides);
  if (brackets_left) {
    ("the || gathers first and stands leftmost, so what it comes to is what the && finds on its left");
    let or_value = list_get(outer, 0);
    let alone_truth = list_get(outer, 1);
    let inner = app_code_operator_truths_wanted(or_symbol, or_value);
    let first_truth = list_get(inner, 0);
    let second_truth = list_get(inner, 1);
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
  let alone_truth_right = list_get(outer, 0);
  let or_value_right = list_get(outer, 1);
  let inner_right = app_code_operator_truths_wanted(or_symbol, or_value_right);
  let first_truth_right = list_get(inner_right, 0);
  let second_truth_right = list_get(inner_right, 1);
  let tree_right = app_code_expression_node_right_operator_first(
    alone_truth_right,
    and_symbol,
    first_truth_right,
    or_symbol,
    second_truth_right,
  );
  return tree_right;
}

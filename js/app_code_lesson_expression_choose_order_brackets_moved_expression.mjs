import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_operator_truths_wanted } from "./app_code_operator_truths_wanted.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_expression_node_left_operator_first_bracketed } from "./app_code_expression_node_left_operator_first_bracketed.mjs";
import { app_code_expression_node_right_operator_first_bracketed } from "./app_code_expression_node_right_operator_first_bracketed.mjs";
export function app_code_lesson_expression_choose_order_brackets_moved_expression(
  want_true,
  brackets_left,
) {
  arguments_assert(arguments, 2);
  ("a line holding an && and then an || with one pair of brackets round the first two words or round the last two, built as a shape so the quiz can work one operator out at a time: (false && true) || true, or false && (true || true)");
  ("The && stands before the || on every line, and only the brackets move. That is the whole of what this lesson asks: two lines that read the same words in the same order, where the one thing that differs is where the pair of marks sits, so the answer can only come from reading them.");
  ("Round the last two the brackets turn the order over, and round the first two they change nothing, because the && was going to gather its sides first anyway. Both are printed, and the second is the point as much as the first - a learner meeting only brackets that change something would go on to read every pair as a warning.");
  ("The trues and falses are chosen from the outside in, the same way the rest of this run chooses them. What the whole line has to come to says what the outer operator needs on each side of it, and what it needs on the gathered side says what the inner one has to come to. So neither operator is asked what it means - each is asked which pairs reach the answer wanted.");
  ("Where the brackets go is handed in rather than settled here, so the lesson drawing on this maker decides how it moves them. It has to move, however it is decided: left always at one end, the answer would sit at a fixed place on the line and a learner could press it right every time without reading a mark.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  if (brackets_left) {
    ("the brackets gather the && , which is what the line would have done on its own, so the || is left holding what that comes to");
    let outer = app_code_operator_truths_wanted(or_symbol, want_true);
    let and_value = list_get(outer, 0);
    let last_truth = list_get(outer, 1);
    let inner = app_code_operator_truths_wanted(and_symbol, and_value);
    let first_truth = list_get(inner, 0);
    let second_truth = list_get(inner, 1);
    let tree_left = app_code_expression_node_left_operator_first_bracketed(
      first_truth,
      and_symbol,
      second_truth,
      or_symbol,
      last_truth,
    );
    return tree_left;
  }
  ("the brackets gather the || , which the line would have left until last, so the && is left holding what that comes to");
  let outer_right = app_code_operator_truths_wanted(and_symbol, want_true);
  let first_truth_right = list_get(outer_right, 0);
  let or_value = list_get(outer_right, 1);
  let inner_right = app_code_operator_truths_wanted(or_symbol, or_value);
  let second_truth_right = list_get(inner_right, 0);
  let last_truth_right = list_get(inner_right, 1);
  let tree_right = app_code_expression_node_right_operator_first_bracketed(
    first_truth_right,
    and_symbol,
    second_truth_right,
    or_symbol,
    last_truth_right,
  );
  return tree_right;
}

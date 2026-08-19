import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_operator_truths_wanted } from "./app_code_operator_truths_wanted.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
export function app_code_lesson_expression_choose_order_brackets_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a line whose || stands in brackets on the right of an && , built as a shape so the quiz can work one operator out at a time: false && (true || true)");
  ("The three trues and falses are chosen from the outside in, the same way the lesson before it chooses them. What the whole line has to come to says what the && needs on each side of it, and what the && needs on its right says what the || has to come to, which in turn says what stands either side of the ||. So neither operator is asked what it means - each is asked which pairs reach the answer wanted.");
  ("The || is the one inside the brackets rather than the && , because that is the pairing where the brackets change something. An && in brackets on the right of a || would print with its brackets and be solved first either way, so a learner could read past the brackets and still be right every time.");
  ("The line prints with brackets in it and nothing here writes them: || is weaker than && , so a || standing on the right of an && can only mean what it says with brackets round it, and the helper that prints the line reads that off the shape. Written by hand they could disagree with the shape, and the line a learner presses would be a different line from the one being solved.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let outer = app_code_operator_truths_wanted(and_symbol, want_true);
  let left_truth = list_get(outer, 0);
  let or_value = list_get(outer, 1);
  let inner = app_code_operator_truths_wanted(or_symbol, or_value);
  let inner_left_truth = list_get(inner, 0);
  let inner_right_truth = list_get(inner, 1);
  let tree = app_code_expression_node_right_operator_first(
    left_truth,
    and_symbol,
    inner_left_truth,
    or_symbol,
    inner_right_truth,
  );
  return tree;
}

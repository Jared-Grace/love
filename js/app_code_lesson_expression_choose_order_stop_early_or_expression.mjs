import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_operator_truths_wanted } from "./app_code_operator_truths_wanted.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
export function app_code_lesson_expression_choose_order_stop_early_or_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a line of the stop-early-on-|| lesson: one true or false, then ||, then an && of two, so the || stands leftmost and its right side is the whole &&");
  ("Only this end, because only here is a skip something a learner can see: with the || leftmost, a true on its left leaves the whole && unsolved. With the && leftmost, as in false && true || true, what || skips is one plain word. About two lines in three that come to true stop early; a line that comes to false never does, so a learner has to look at the left side each time");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let outer = app_code_operator_truths_wanted(or_symbol, want_true);
  let far_truth = list_get(outer, 0);
  let and_value = list_get(outer, 1);
  let inner = app_code_operator_truths_wanted(and_symbol, and_value);
  let inner_left = list_get(inner, 0);
  let inner_right = list_get(inner, 1);
  let tree = app_code_expression_node_right_operator_first(
    far_truth,
    or_symbol,
    inner_left,
    and_symbol,
    inner_right,
  );
  return tree;
}

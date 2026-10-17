import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { app_code_expression_stops_early_marked } from "./app_code_expression_stops_early_marked.mjs";
import { app_code_lesson_expression_choose_order_walks_above_generic } from "./app_code_lesson_expression_choose_order_walks_above_generic.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_recall } from "./app_code_lesson_expression_choose_order_and_before_or_recall.mjs";
import { app_code_lesson_expression_choose_order_stop_early_intro } from "./app_code_lesson_expression_choose_order_stop_early_intro.mjs";
export function app_code_lesson_expression_choose_order_stop_early_above(
  root,
  context,
) {
  arguments_assert(arguments, 2);
  ("what stands above the card on the stop-early lesson: what && and || come to, then two lines walked as JavaScript solves them, then the sentences saying what is new");
  ("The two lines are fixed, and they are the two ways a learner can get this wrong. true || false && false: the || is solved first and the && never is, though the && is the stronger. false && true || true: the && still goes first and comes to false, and the line is still true - stopping early stops one operator, never the whole line. Not picked: drawing the lines, as the && before || lesson does, which would sometimes walk a line that never stops early and so show nothing new");
  ("The recall is the one the && before || lesson shows, because what the learner needs to have in mind is the same: what each of the two comes to");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let tree_or_stops = app_code_expression_node_right_operator_first(
    true,
    or_symbol,
    false,
    and_symbol,
    false,
  );
  let tree_and_stops = app_code_expression_node_left_operator_first(
    false,
    and_symbol,
    true,
    or_symbol,
    true,
  );
  let heading_none = [];
  let heading_and_first = [
    "The ",
    and_symbol,
    " still goes before the ",
    or_symbol,
  ];
  let walks = [
    {
      heading: heading_none,
      tree: app_code_expression_stops_early_marked(tree_or_stops),
    },
    {
      heading: heading_and_first,
      tree: app_code_expression_stops_early_marked(tree_and_stops),
    },
  ];
  app_code_lesson_expression_choose_order_walks_above_generic(
    root,
    app_code_lesson_expression_choose_order_and_before_or_recall,
    walks,
    app_code_lesson_expression_choose_order_stop_early_intro,
    context,
  );
}

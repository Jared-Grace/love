import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { app_code_expression_node_right_operator_first_parenthesis_wrapped } from "./app_code_expression_node_right_operator_first_parenthesis_wrapped.mjs";
import { app_code_expression_stops_early_marked } from "./app_code_expression_stops_early_marked.mjs";
import { app_code_lesson_expression_choose_order_walks_above_generic } from "./app_code_lesson_expression_choose_order_walks_above_generic.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_recall } from "./app_code_lesson_expression_choose_order_and_before_or_recall.mjs";
import { app_code_lesson_expression_choose_order_stop_early_and_intro } from "./app_code_lesson_expression_choose_order_stop_early_and_intro.mjs";
export function app_code_lesson_expression_choose_order_stop_early_and_above(
  root,
  context,
) {
  arguments_assert(arguments, 2);
  ("what stands above the card on the stop-early-on-&& lesson: what && and || come to, then two lines walked as JavaScript solves them, then the sentences saying what is new");
  ("The two lines are fixed and differ in one word. false && (true || true): the left side is false, so the (true || true) is never solved. true && (false || true): the left side is true, so it is. Not picked: drawing the lines, which would sometimes walk two lines that both stop, and never show that a true on the left lets the right side be solved");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let true_word = js_keyword_true();
  let tree_stops =
    app_code_expression_node_right_operator_first_parenthesis_wrapped(
      false,
      and_symbol,
      true,
      or_symbol,
      true,
    );
  let tree_solves =
    app_code_expression_node_right_operator_first_parenthesis_wrapped(
      true,
      and_symbol,
      false,
      or_symbol,
      true,
    );
  let heading_none = [];
  let heading_solves = [
    "When the left side of ",
    and_symbol,
    " is ",
    true_word,
    ", JavaScript solves its right side",
  ];
  let walks = [
    {
      heading: heading_none,
      tree: app_code_expression_stops_early_marked(tree_stops),
    },
    {
      heading: heading_solves,
      tree: app_code_expression_stops_early_marked(tree_solves),
    },
  ];
  app_code_lesson_expression_choose_order_walks_above_generic(
    root,
    app_code_lesson_expression_choose_order_and_before_or_recall,
    walks,
    app_code_lesson_expression_choose_order_stop_early_and_intro,
    context,
  );
}

import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
import { app_code_expression_stops_early_marked } from "./app_code_expression_stops_early_marked.mjs";
import { app_code_lesson_expression_choose_order_walks_above_generic } from "./app_code_lesson_expression_choose_order_walks_above_generic.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_recall } from "./app_code_lesson_expression_choose_order_and_before_or_recall.mjs";
import { app_code_lesson_expression_choose_order_stop_early_or_intro } from "./app_code_lesson_expression_choose_order_stop_early_or_intro.mjs";
export function app_code_lesson_expression_choose_order_stop_early_or_above(
  root,
  context,
) {
  arguments_assert(arguments, 2);
  ("what stands above the card on the stop-early-on-|| lesson: what && and || come to, then two lines walked as JavaScript solves them, then the sentences saying what is new");
  ("The two lines are fixed and differ in one word. true || false && false: the left side is true, so the && is never solved, though the && is the stronger. false || true && false: the left side is false, so it is. Not picked: drawing the lines, which would sometimes walk two lines that both stop, and never show that a false on the left lets the right side be solved. Not picked either, since the 2026-10-17 split: false && true || true, whose && skips one plain word and so belongs to neither lesson");
  ("The recall is the one the && before || lesson shows, because what the learner needs to have in mind is the same: what each of the two comes to");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let false_word = js_keyword_false();
  let tree_stops = app_code_expression_node_right_operator_first(
    true,
    or_symbol,
    false,
    and_symbol,
    false,
  );
  let tree_solves = app_code_expression_node_right_operator_first(
    false,
    or_symbol,
    true,
    and_symbol,
    false,
  );
  let heading_none = [];
  let heading_solves = [
    "When the left side of ",
    or_symbol,
    " is ",
    false_word,
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
    app_code_lesson_expression_choose_order_stop_early_or_intro,
    context,
  );
}

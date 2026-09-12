import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { text_to } from "./text_to.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { property_get } from "./property_get.mjs";
import { html_span } from "./html_span.mjs";
import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { app_code_expression_paint_before_side } from "./app_code_expression_paint_before_side.mjs";
import { app_code_operator_rank_least_left } from "./app_code_operator_rank_least_left.mjs";
import { app_code_expression_paint_side } from "./app_code_expression_paint_side.mjs";
import { app_code_operator_rank_least_right } from "./app_code_operator_rank_least_right.mjs";
export function app_code_expression_paint(parent, item, on_operator) {
  arguments_assert(arguments, 3);
  ("write an expression shape into a parent as separate pieces rather than as one piece of text, so that each operator standing in it is its own thing on the page and can be pressed");
  ("The same line ",
    fn_name("app_code_expression_code"),
    " writes, character for character - the spacing and the parentheses are decided by the same two helpers, so a learner pressing a line and a learner reading one are looking at the same line.");
  ("on_operator receives the operator, the piece of page the symbol was written into, and the piece holding the symbol together with both of its sides; the caller decides from there what pressing it does: the lesson makes the one that may be worked out next pressable and leaves the rest plain.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    ("nothing but a value, so there is no operator to offer and the number is written as it stands");
    let text = text_to(item);
    html_span_text(parent, text);
    return;
  }
  let symbol = property_get(item, "operator");
  ("the operator and its two sides are written inside a piece of their own, so a lesson can colour the whole of what one press is about to work out and not the symbol alone");
  let node_span = html_span(parent);
  let before_is = app_code_expression_node_before_is(item);
  if (before_is) {
    ("a one-sided operator is written in front of the one thing it acts on, with no space between them and no side to its left, and how that one thing is gathered depends on how the operator is spelled");
    let rank = app_code_operator_rank(symbol);
    let operator_span_before = html_span_text(node_span, symbol);
    let acted_on = property_get(item, "right");
    app_code_expression_paint_before_side(
      node_span,
      acted_on,
      symbol,
      rank,
      on_operator,
    );
    on_operator(item, operator_span_before, node_span);
    return;
  }
  ("each side asks for the strength it has to reach, out of the same two places the written line asks, so the pressable line cannot grow or lose a parenthesis the written one did not");
  let rank_left = app_code_operator_rank_least_left(symbol);
  let left = property_get(item, "left");
  app_code_expression_paint_side(node_span, left, rank_left, on_operator);
  html_span_text(node_span, " ");
  let operator_span = html_span_text(node_span, symbol);
  html_span_text(node_span, " ");
  let rank_right = app_code_operator_rank_least_right(symbol);
  let right = property_get(item, "right");
  app_code_expression_paint_side(node_span, right, rank_right, on_operator);
  ("handed over once the whole piece is written, so the caller receives an operator that already has its sides standing beside it");
  on_operator(item, operator_span, node_span);
}

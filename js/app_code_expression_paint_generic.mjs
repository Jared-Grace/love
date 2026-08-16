import { fn_name } from "./fn_name.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_expression_paint_side_generic } from "./app_code_expression_paint_side_generic.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_expression_paint_generic(
  parent,
  item,
  on_operator,
  on_value,
) {
  arguments_assert(arguments, 4);
  ("write an expression shape into a parent as separate pieces rather than as one piece of text, so that each operator standing in it is its own thing on the page and can be pressed, and each number in it is its own thing and can be pointed at");
  ("The same line ",
    fn_name("app_code_expression_code"),
    " writes, character for character - the spacing and the brackets are decided by the same two helpers, so a learner pressing a line and a learner reading one are looking at the same line.");
  ("on_operator receives the operator, the piece of page the symbol was written into, and the piece holding the symbol together with both of its sides; the caller decides from there what pressing it does: the lesson makes the one that may be worked out next pressable and leaves the rest plain.");
  ("on_value receives each number as it is written, in the order it is read, together with the piece of page it was written into. That is what lets a caller say something about ONE number of a line - the one that has just arrived in it - without having to find it again in a run of text where every number looks alike.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    ("nothing but a value, so there is no operator to offer and the number is written as it stands");
    let text = text_to(item);
    let value_span = html_span_text(parent, text);
    on_value(item, value_span);
    return;
  }
  let symbol = property_get(item, "operator");
  let rank = app_code_operator_rank(symbol);
  ("the operator and its two sides are written inside a piece of their own, so a lesson can colour the whole of what one press is about to work out and not the symbol alone");
  let node_span = html_span(parent);
  let left = property_get(item, "left");
  app_code_expression_paint_side_generic(
    node_span,
    left,
    rank,
    on_operator,
    on_value,
  );
  html_span_text(node_span, " ");
  let operator_span = html_span_text(node_span, symbol);
  html_span_text(node_span, " ");
  let right = property_get(item, "right");
  ("the right side is bracketed one rank sooner than the left, the same way the written line does it");
  let rank_right = add_1(rank);
  app_code_expression_paint_side_generic(
    node_span,
    right,
    rank_right,
    on_operator,
    on_value,
  );
  ("handed over once the whole piece is written, so the caller receives an operator that already has its sides standing beside it");
  on_operator(item, operator_span, node_span);
}

import { fn_name } from "./fn_name.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_expression_paint_side } from "./app_code_expression_paint_side.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_expression_paint(parent, item, on_operator) {
  arguments_assert(arguments, 3);
  ("write an expression shape into a parent as separate pieces rather than as one piece of text, so that each operator standing in it is its own thing on the page and can be pressed");
  ("The same line ",
    fn_name("app_code_expression_code"),
    " writes, character for character - the spacing and the brackets are decided by the same two helpers, so a learner pressing a line and a learner reading one are looking at the same line.");
  ("on_operator receives the operator and the piece of page it was written into, and the caller decides from there what pressing it does: the lesson makes the one that may be worked out next pressable and leaves the rest plain.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    ("nothing but a value, so there is no operator to offer and the number is written as it stands");
    let text = text_to(item);
    html_span_text(parent, text);
    return;
  }
  let symbol = property_get(item, "operator");
  let rank = app_code_operator_rank(symbol);
  let left = property_get(item, "left");
  app_code_expression_paint_side(parent, left, rank, on_operator);
  html_span_text(parent, " ");
  let operator_span = html_span_text(parent, symbol);
  on_operator(item, operator_span);
  html_span_text(parent, " ");
  let right = property_get(item, "right");
  ("the right side is bracketed one rank sooner than the left, the same way the written line does it");
  let rank_right = add_1(rank);
  app_code_expression_paint_side(parent, right, rank_right, on_operator);
}

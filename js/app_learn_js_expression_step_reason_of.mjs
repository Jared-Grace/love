import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_expression_node_stops_early_is } from "./app_learn_js_expression_node_stops_early_is.mjs";
import { app_learn_js_expression_node_settled_is } from "./app_learn_js_expression_node_settled_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_expression_node_is } from "./app_learn_js_expression_node_is.mjs";
import { property_text_to } from "./property_text_to.mjs";
import { app_learn_js_expression_name_is } from "./app_learn_js_expression_name_is.mjs";
import { app_learn_js_expression_solved } from "./app_learn_js_expression_solved.mjs";
import { app_learn_js_expression_operator_symbols } from "./app_learn_js_expression_operator_symbols.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_learn_js_expression_node_bracketed_is } from "./app_learn_js_expression_node_bracketed_is.mjs";
import { app_learn_js_expression_code } from "./app_learn_js_expression_code.mjs";
import { app_learn_js_expression_node_parentheses_is } from "./app_learn_js_expression_node_parentheses_is.mjs";
import { text_wrap_parenthesis } from "./text_wrap_parenthesis.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_expression_step_reason } from "./app_learn_js_expression_step_reason.mjs";
export function app_learn_js_expression_step_reason_of(item, node) {
  arguments_assert(arguments, 2);
  ("the one sentence saying why this part of this line is the one that may be worked out next, as the pieces of a row: the parentheses when the part is written inside a pair, and otherwise what the operators come to");
  ("Asked of the line and the part rather than of two operators, because the line is what decides. Parentheses beat every strength there is, so a telling that only ever compared the operators had to say something false about a parenthesised line: on false && (true || true) the || does not outrank the && and is not the leftmost of the two, and the rule about ranks came out as the two being read left to right.");
  ("The parentheses are asked about first and nothing after them is consulted, because a pair of marks is the whole reason when it is there. On a parenthesised part the ranks may agree with the marks or disagree with them, and either way the marks are what the learner can see.");
  ("Every walk that takes a line down an operator at a time asks here, so the sentence one lesson reads is the sentence the next one reads. The parenthesis sentence was written at one of those walks and the rank sentence at another, which left the same step worded two ways on two screens a learner reads in a row - and the walk that had only the rank sentence printed it on lines whose order the ranks did not decide.");
  ("What is left on the line is read back off the line after the step rather than handed in, so it says what is true at that moment: an operator that outranked two others on the first row may be an equal by the third.");
  ("2026-10-17, at the human's asking: an && or an || marked to stop early whose left side already decides it is ready for that reason and no other - the strength of the operators did not choose it, and its right side, still holding operators of its own, is never worked out. It is told only when that right side holds something: a plain true or false on the right is a side with nothing to work out either way, and the rule that chose the step is the ordinary one. Not picked: telling it on every step that stops early, which would say a value was skipped that needed nothing doing to it");
  let stopped = app_learn_js_expression_node_stops_early_is(node);
  if (stopped && app_learn_js_expression_node_settled_is(node)) {
    let right_side = property_get(node, "right");
    if (app_learn_js_expression_node_is(right_side)) {
      let symbol_stopped = property_get(node, "operator");
      let left_text = property_text_to(node, "left");
      let stops = [
        "The left side of ",
        symbol_stopped,
        " is ",
        left_text,
        ", so its right side is never solved",
      ];
      return stops;
    }
  }
  ("2026-11-09, the array lessons: a name has no operator to rank, and a part inside an item's brackets goes first for the brackets' sake, as a part inside parentheses does - ranked as operators, 3 - 1 inside a[3 - 1] would be said to be solved left to right with the brackets");
  if (app_learn_js_expression_name_is(node)) {
    let name = property_get(node, "name");
    let solved_name = app_learn_js_expression_solved(item, node);
    let others_after_name =
      app_learn_js_expression_operator_symbols(solved_name);
    if (list_empty_is(others_after_name)) {
      let alone = [];
      return alone;
    }
    let read_first = [
      "The value of ",
      name,
      " is found before anything is done with it",
    ];
    return read_first;
  }
  let bracketed = app_learn_js_expression_node_bracketed_is(item, node);
  if (bracketed) {
    let inside_code = app_learn_js_expression_code(node);
    let inside = [
      "The ",
      inside_code,
      " is inside the brackets, so it is solved before the item is read",
    ];
    return inside;
  }
  let parentheses = app_learn_js_expression_node_parentheses_is(item, node);
  if (parentheses) {
    let step_code = app_learn_js_expression_code(node);
    let gathered = text_wrap_parenthesis(step_code);
    let marks = [
      "The ",
      gathered,
      " has parentheses, so what is inside them must be solved before what is outside",
    ];
    return marks;
  }
  let symbol = property_get(node, "operator");
  let solved = app_learn_js_expression_solved(item, node);
  let remaining = app_learn_js_expression_operator_symbols(solved);
  let others = list_unique(remaining);
  let reason = app_learn_js_expression_step_reason(symbol, others);
  return reason;
}

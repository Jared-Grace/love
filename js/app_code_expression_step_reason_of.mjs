import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_brackets_is } from "./app_code_expression_node_brackets_is.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { text_wrap_parenthesis } from "./text_wrap_parenthesis.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { app_code_expression_operator_symbols } from "./app_code_expression_operator_symbols.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_expression_step_reason } from "./app_code_expression_step_reason.mjs";
export function app_code_expression_step_reason_of(item, node) {
  arguments_assert(arguments, 2);
  ("the one sentence saying why this part of this line is the one that may be worked out next, as the pieces of a row: the parentheses when the part is written inside a pair, and otherwise what the operators come to");
  ("Asked of the line and the part rather than of two operators, because the line is what decides. Parentheses beat every strength there is, so a telling that only ever compared the operators had to say something false about a bracketed line: on false && (true || true) the || does not outrank the && and is not the leftmost of the two, and the rule about ranks came out as the two being read left to right.");
  ("The parentheses are asked about first and nothing after them is consulted, because a pair of marks is the whole reason when it is there. On a bracketed part the ranks may agree with the marks or disagree with them, and either way the marks are what the learner can see.");
  ("Every walk that takes a line down an operator at a time asks here, so the sentence one lesson reads is the sentence the next one reads. The bracket sentence was written at one of those walks and the rank sentence at another, which left the same step worded two ways on two screens a learner reads in a row - and the walk that had only the rank sentence printed it on lines whose order the ranks did not decide.");
  ("What is left on the line is read back off the line after the step rather than handed in, so it says what is true at that moment: an operator that outranked two others on the first row may be an equal by the third.");
  let brackets = app_code_expression_node_brackets_is(item, node);
  if (brackets) {
    let step_code = app_code_expression_code(node);
    let gathered = text_wrap_parenthesis(step_code);
    let marks = [
      "The ",
      gathered,
      " has parentheses, so what is inside them must be solved before what is outside",
    ];
    return marks;
  }
  let symbol = property_get(node, "operator");
  let solved = app_code_expression_solved(item, node);
  let remaining = app_code_expression_operator_symbols(solved);
  let others = list_unique(remaining);
  let reason = app_code_expression_step_reason(symbol, others);
  return reason;
}

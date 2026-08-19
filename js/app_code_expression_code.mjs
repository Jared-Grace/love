import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { app_code_operator_code_before } from "./app_code_operator_code_before.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_expression_side_code } from "./app_code_expression_side_code.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_expression_code(item) {
  arguments_assert(arguments, 1);
  ("the code a learner reads for a whole expression shape: the shape for 1 + 2 * 3 prints as 1 + 2 * 3, and the shape for (1 + 2) * 3 prints with its brackets");
  ("Brackets are worked out rather than remembered. The shape says which operator holds which, so a bracket is needed exactly where leaving it out would let a reader take the parts in a different order - and that is a question the ranks answer. Remembering instead which brackets were typed would let a shape print as a line that does not mean it.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    let text = text_to(item);
    return text;
  }
  let symbol = property_get(item, "operator");
  let rank = app_code_operator_rank(symbol);
  let before_is = app_code_expression_node_before_is(item);
  if (before_is) {
    ("a one-sided operator asks its single side for its own strength rather than one above it: !!true needs no brackets because the second ! is worked out first anyway, while !(3 < 5) does");
    let acted_on = property_get(item, "right");
    let acted_on_code = app_code_expression_side_code(acted_on, rank);
    let code_before = app_code_operator_code_before(symbol, acted_on_code);
    return code_before;
  }
  let left = property_get(item, "left");
  let left_code = app_code_expression_side_code(left, rank);
  let right = property_get(item, "right");
  ("the right side is bracketed one rank sooner than the left, because an operator of the same strength on the right is worked out after this one and so has to be gathered: 8 / 4 / 2 is not 8 / (4 / 2), while 8 / 4 * 2 needs nothing on the left");
  let rank_right = add_1(rank);
  let right_code = app_code_expression_side_code(right, rank_right);
  let code = app_code_operator_code(left_code, symbol, right_code);
  return code;
}

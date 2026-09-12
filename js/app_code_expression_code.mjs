import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { text_to } from "./text_to.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { app_code_operator_called_is } from "./app_code_operator_called_is.mjs";
import { app_code_operator_code_called } from "./app_code_operator_code_called.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { app_code_expression_side_code } from "./app_code_expression_side_code.mjs";
import { app_code_operator_code_before } from "./app_code_operator_code_before.mjs";
import { app_code_operator_rank_least_left } from "./app_code_operator_rank_least_left.mjs";
import { app_code_operator_rank_least_right } from "./app_code_operator_rank_least_right.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
export function app_code_expression_code(item) {
  arguments_assert(arguments, 1);
  ("the code a learner reads for a whole expression shape: the shape for 1 + 2 * 3 prints as 1 + 2 * 3, and the shape for (1 + 2) * 3 prints with its parentheses");
  ("Parentheses are worked out rather than remembered. The shape says which operator holds which, so a parenthesis is needed exactly where leaving it out would let a reader take the parts in a different order - and that is a question the ranks answer. Remembering instead which parentheses were typed would let a shape print as a line that does not mean it.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    let text = text_to(item);
    return text;
  }
  let symbol = property_get(item, "operator");
  let before_is = app_code_expression_node_before_is(item);
  if (before_is) {
    ("a one-sided operator asks its single side for its own strength rather than one above it: !!true needs no parentheses because the second ! is worked out first anyway, while !(3 < 5) does");
    let acted_on = property_get(item, "right");
    let called = app_code_operator_called_is(symbol);
    if (called) {
      ("an operator spelled as a name with brackets keeps them round whatever is inside, so it is never asked whether the inside needs gathering: after the division in Math.floor(14 / 4) has been worked out the line reads Math.floor(3.5), where a gathering would have left Math.floor3.5");
      let inside_code = app_code_expression_code(acted_on);
      let code_called = app_code_operator_code_called(symbol, inside_code);
      return code_called;
    }
    let rank = app_code_operator_rank(symbol);
    let acted_on_code = app_code_expression_side_code(acted_on, rank);
    let code_before = app_code_operator_code_before(symbol, acted_on_code);
    return code_before;
  }
  ("each side asks for the strength it has to reach, and the two sides do not ask for the same one: the side an operator works out LAST has to be gathered when it holds an operator of equal strength, because otherwise a reader takes the line the other way round. 8 / 4 / 2 is not 8 / (4 / 2), while nothing on the left of a divide ever needs that - and a power is the other way round, so (2 ** 3) ** 2 keeps its marks and 2 ** 3 ** 2 needs none.");
  let rank_left = app_code_operator_rank_least_left(symbol);
  let left = property_get(item, "left");
  let left_code = app_code_expression_side_code(left, rank_left);
  let rank_right = app_code_operator_rank_least_right(symbol);
  let right = property_get(item, "right");
  let right_code = app_code_expression_side_code(right, rank_right);
  let code = app_code_operator_code(left_code, symbol, right_code);
  return code;
}

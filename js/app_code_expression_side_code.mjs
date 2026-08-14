import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { or } from "./or.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_code_expression_side_code(side, rank_least) {
  arguments_assert(arguments, 2);
  ("the code for one side of an operator, gathered into brackets when the operator on that side is weaker than rank_least");
  ("The side asks for the strength it needs rather than being told whether to bracket. A side that is only a value has no operator to be weaker, so it never brackets, and one whose operator is strong enough already reads in the right order on its own.");
  let code = app_code_expression_code(side);
  let node_is = app_code_expression_node_is(side);
  if (not(node_is)) {
    return code;
  }
  let written = property_get_or(side, "bracketed", false);
  let symbol = property_get(side, "operator");
  let rank = app_code_operator_rank(symbol);
  let weaker = less_than(rank, rank_least);
  let bracket = or(written, weaker);
  if (bracket) {
    let wrapped = js_code_wrap_parenthesis(code);
    return wrapped;
  }
  return code;
}

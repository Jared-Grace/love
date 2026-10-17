import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { app_code_expression_name_is } from "./app_code_expression_name_is.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { less_than } from "./less_than.mjs";
import { or } from "./or.mjs";
export function app_code_expression_side_parenthesis_is(side, rank_least) {
  arguments_assert(arguments, 2);
  ("whether one side of an operator has to be gathered into parentheses when it is written out beside it");
  ("Asked in one place because a line is now written twice - once as a piece of text a learner reads, and once as separate pieces a learner can press - and two spellings of the same rule would let the pressable line grow or lose a parenthesis the written one did not.");
  ("A side that is only a value has no operator to be weaker, so it never parentheses.");
  let node_is = app_code_expression_node_is(side);
  if (not(node_is)) {
    let value_side = false;
    return value_side;
  }
  ("a name is one word, so it never parentheses either");
  if (app_code_expression_name_is(side)) {
    return false;
  }
  let written = property_get_or(side, "parenthesised", false);
  let symbol = property_get(side, "operator");
  let rank = app_code_operator_rank(symbol);
  let weaker = less_than(rank, rank_least);
  let parenthesis = or(written, weaker);
  return parenthesis;
}

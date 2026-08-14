import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { or } from "./or.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_code_expression_side_bracket_is(side, rank_least) {
  arguments_assert(arguments, 2);
  ("whether one side of an operator has to be gathered into brackets when it is written out beside it");
  ("Asked in one place because a line is now written twice - once as a piece of text a learner reads, and once as separate pieces a learner can press - and two spellings of the same rule would let the pressable line grow or lose a bracket the written one did not.");
  ("A side that is only a value has no operator to be weaker, so it never brackets.");
  let node_is = app_code_expression_node_is(side);
  if (not(node_is)) {
    let value_side = false;
    return value_side;
  }
  let written = property_get_or(side, "bracketed", false);
  let symbol = property_get(side, "operator");
  let rank = app_code_operator_rank(symbol);
  let weaker = less_than(rank, rank_least);
  let bracket = or(written, weaker);
  return bracket;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { app_code_operator_right_first_is } from "./app_code_operator_right_first_is.mjs";
import { add_1 } from "./add_1.mjs";
export function app_code_operator_rank_least_left(symbol) {
  arguments_assert(arguments, 1);
  ("the strength the left side of an operator has to reach to be written without parentheses round it: a divide asks only for its own strength, so 8 / 4 / 2 leaves its left side alone, while a power asks for one above its own, so (2 ** 3) ** 2 keeps its marks");
  ("An operator of equal strength on the side that is worked out LAST has to be gathered, or the line reads as the other grouping. For everything but a power that side is the right one, which is why the left side usually asks for nothing extra.");
  let rank = app_code_operator_rank(symbol);
  let right_first = app_code_operator_right_first_is(symbol);
  if (right_first) {
    ("the power sign is the case where the LEFT side is the one worked out last");
    let above = add_1(rank);
    return above;
  }
  return rank;
}

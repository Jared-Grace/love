import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { app_code_operator_right_first_is } from "./app_code_operator_right_first_is.mjs";
import { add_1 } from "./add_1.mjs";
export function app_code_operator_rank_least_right(symbol) {
  arguments_assert(arguments, 1);
  ("the strength the right side of an operator has to reach to be written without parentheses round it: a divide asks for one above its own strength, since 8 / 4 / 2 is not 8 / (4 / 2), while a power asks only for its own, since 2 ** 3 ** 2 already means 2 ** (3 ** 2)");
  ("An operator of equal strength on the side that is worked out LAST has to be gathered, or the line reads as the other grouping. For everything but a power that side is the right one, which is why the right side usually asks for one strength above.");
  let rank = app_code_operator_rank(symbol);
  let right_first = app_code_operator_right_first_is(symbol);
  if (right_first) {
    ("the power sign is the case where the right side is worked out FIRST, so nothing on it ever needs gathering on account of strength");
    return rank;
  }
  let above = add_1(rank);
  return above;
}

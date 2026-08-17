import { app_code_expression_step_operands } from "./app_code_expression_step_operands.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { app_code_operators_strong } from "./app_code_operators_strong.mjs";
import { app_code_operators_weak } from "./app_code_operators_weak.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { not } from "./not.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_expression_step_choices(value, rank_most) {
  arguments_assert(arguments, 2);
  (
    "every way one more operator may be written beside a line that has come to this value, without a bracket being needed: the symbol, which side the line already there stands on, and the numbers that may join it"
  );
  (
    "A line is grown by putting an operator beside what is already there, and only some of those growings print back as the line they mean. Put a times beside a plus with the plus on the left and the line reads 2 + 3 * 4, which is a different shape from the one that was built. This says which growings are safe, so a line is never built that cannot be written down."
  );
  (
    "The rule is one comparison of strengths, and it is not the same comparison on the two sides. On the left an equal strength is enough, because a reader takes equal strengths from the left anyway; on the right it has to be strictly stronger, since 8 - 2 - 1 read from the left is not 8 - (2 - 1)."
  );
  (
    "A choice carries the numbers that may join it rather than only the symbol, because whether an operator fits here depends on both: a times may be written beside a 2 and not beside a 7, and the caller would otherwise have to ask a second time to find that out."
  );
  let strong = app_code_operators_strong();
  let weak = app_code_operators_weak();
  let symbols = list_concat(strong, weak);
  let choices = [];
  function side_add(symbol, rank, value_left) {
    "one symbol on one side, kept when it prints back unchanged and has a number to go with it";
    let left_room = greater_than_equal(rank_most, rank);
    let right_room = greater_than(rank_most, rank);
    let room = ternary(value_left, left_room, right_room);
    if (not(room)) {
      return;
    }
    let operands = app_code_expression_step_operands(value, symbol, value_left);
    let any = list_empty_not_is(operands);
    if (not(any)) {
      return;
    }
    let choice = {
      symbol,
      value_left,
      operands,
    };
    list_add(choices, choice);
  }
  function symbol_add(symbol) {
    "a symbol is tried on both sides of what is already there";
    let rank = app_code_operator_rank(symbol);
    side_add(symbol, rank, true);
    side_add(symbol, rank, false);
  }
  each(symbols, symbol_add);
  return choices;
}

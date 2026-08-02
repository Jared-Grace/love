import { arguments_assert } from "./arguments_assert.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { round } from "./round.mjs";
export function multiply_divide_round(number, times, divisor) {
  arguments_assert(arguments, 3);
  ("A number scaled up by one number and down by another, to the nearest whole.");
  ("What share of a plant's matches were questions, what share of a leader's days");
  ("held a conversation, what either comes to across a whole game. Every one of");
  ("them is a hundredth part worked out and then reported as a whole number,");
  ("because a fraction of a percent is not something a player is told. The long");
  ("decimal in between is never shown and never kept.");
  let scaled = multiply_divide(number, times, divisor);
  let whole = round(scaled);
  return whole;
}

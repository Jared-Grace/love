import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { round } from "./round.mjs";
export function multiply_round(number, times) {
  arguments_assert(arguments, 2);
  ("Two numbers multiplied together and kept to the nearest whole one.");
  ("How many lines out of a passage to ask about, how many turns a conversation");
  ("runs for, a share written out of a hundred. Each works from a rate and then");
  ("has to land on something countable, because there is no such thing as most of");
  ("a question or part of a turn. The fraction in between is never wanted.");
  let exact = multiply(number, times);
  let whole = round(exact);
  return whole;
}

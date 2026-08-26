import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
export function number_gap(a, b) {
  "$plain a";
  "$plain b";
  "How far apart two numbers are, whichever of them is the larger.";
  "Subtracting one from the other answers with a sign, and a sign is the one thing a distance must not carry: a candidate that overshoots by ten and one that falls short by ten are equally good, and comparing the two signed answers would silently prefer the one that fell short.";
  arguments_assert(arguments, 2);
  let above = greater_than(a, b);
  if (above) {
    let up = subtract(a, b);
    return up;
  }
  let down = subtract(b, a);
  return down;
}

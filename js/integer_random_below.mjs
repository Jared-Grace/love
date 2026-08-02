import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { integer_random } from "./integer_random.mjs";
export function integer_random_below(number) {
  arguments_assert(arguments, 1);
  ("A whole number picked at random that is at least one and stays under the");
  ("number given.");
  ("A leftover that makes a division come out uneven has to be at least one, or");
  ("the division comes out even after all, and under the number divided by, or it");
  ("is not a leftover. A number picked to sit below another one wants the same");
  ("two ends. Both write out the top end and then pick, and the top end on its own");
  ("means nothing in either.");
  let max = subtract(number, 1);
  let picked = integer_random(1, max);
  return picked;
}

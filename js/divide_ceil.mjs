import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { ceil } from "./ceil.mjs";
export function divide_ceil(number, divisor) {
  arguments_assert(arguments, 2);
  ("One number shared out among another, rounded up - a part of one still counts");
  ("as a whole one.");
  ("How many days a run of work needs, how many pages a list fills, how many");
  ("batches a queue takes. Rounding down would leave the last few with nowhere to");
  ("go, so the leftover has to have its own whole one.");
  ("The sibling that rounds down is a different question, not a setting of this");
  ("one, because throwing the remainder away and making room for it are opposite");
  ("intentions.");
  let shared = divide(number, divisor);
  let whole = ceil(shared);
  return whole;
}

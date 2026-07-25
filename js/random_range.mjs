import { random } from "./random.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
export function random_range(smallest, largest) {
  "a random number anywhere between the two ends, fractions included — the whole-number pickers land on steps, this one lands anywhere";
  let span = subtract(largest, smallest);
  let left = random();
  let picked = multiply(left, span);
  let r = smallest + picked;
  return r;
}

import { list_sum } from "./list_sum.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
export function list_weighted_pick_index(weights, next) {
  "Which index a weighted draw lands on, given one weight per item and a seeded run of numbers between zero and one.";
  "A running total is the whole mechanism. Each weight is the width of that item's stretch of one line, and where the draw falls decides whose stretch it landed in, so a weight means exactly how much of the line is mine with nothing else to reason about.";
  "The last index is handed back when the walk falls off the end, which a draw landing on the total itself would do. That is a rounding case rather than a real one, and answering it here is what saves every caller from having to.";
  let total = list_sum(weights);
  let fraction = next();
  let landed = multiply(fraction, total);
  let running = 0;
  for (let index = 0; less_than(index, weights.length); index++) {
    let weight = weights[index];
    running = add(running, weight);
    let inside = less_than(landed, running);
    if (inside) {
      return index;
    }
  }
  let last = subtract(weights.length, 1);
  return last;
}

import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
export function reply_cheapest(possibilities) {
  "Of several readings of the same message that all reached the end, the one that needed the fewest and mildest mistakes. Answers null when there are none.";
  "★ THIS IS WHY THE COSTS ARE WORTH KEEPING AT ALL. Without it the first reading found would be taken, and the first reading found is an accident of the order the rules happen to be listed in - so a message spelled perfectly could be answered by a rule that only matched it by forgiving two letters, while the rule that matched it exactly was listed second. Taking the cheapest makes a reading that needs no allowance always beat a reading that needs one, whatever order anything is written in.";
  "A reading with no cost noted is treated as costing nothing, so a rule set where nothing forgives anything behaves exactly as it did before.";
  let best = null;
  let best_cost = null;
  for (let possibility of possibilities) {
    let cost = possibility.cost || 0;
    if (equal(best, null) || less_than(cost, best_cost)) {
      best = possibility;
      best_cost = cost;
    }
  }
  return best;
}

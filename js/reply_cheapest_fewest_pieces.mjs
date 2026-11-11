import { reply_possibility_number } from "./reply_possibility_number.mjs";
import { reply_property_cost } from "./reply_property_cost.mjs";
import { reply_property_pieces } from "./reply_property_pieces.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
export function reply_cheapest_fewest_pieces(possibilities) {
  "Of several readings of the same message, the one that needed the fewest and mildest mistakes, and of those that cost the same, the one answered in the fewest pieces. Answers null when there are none.";
  "★ A TIE WENT TO THE READING FOUND FIRST, AND THE READING FOUND FIRST WAS THE ONE WITH MORE PIECES. Each piece is one more reply, so a verse ending in Christ Jesus could be read whole, or read as stopping at Christ with Jesus left to the rule for his name - both cost nothing, and the two-reply reading was listed first. Measured 2026-11-11 on Philippians 4:7.";
  "The pieces only break a tie. A reading needing one forgiven letter still loses to an exact one, however many pieces either has, so this never trades a mistake for a shorter answer.";
  let best = null;
  let best_cost = null;
  let best_pieces = null;
  for (let possibility of possibilities) {
    let name = reply_property_cost();
    let cost = reply_possibility_number(possibility, name);
    let name2 = reply_property_pieces();
    let pieces = reply_possibility_number(possibility, name2);
    let first = equal(best, null);
    let cheaper = less_than(cost, best_cost);
    let tied = equal(cost, best_cost);
    let fewer = less_than(pieces, best_pieces);
    if (first || cheaper || (tied && fewer)) {
      best = possibility;
      best_cost = cost;
      best_pieces = pieces;
    }
  }
  return best;
}

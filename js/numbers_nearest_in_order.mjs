import { abs } from "./abs.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { error } from "./error.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { add } from "./add.mjs";
export function numbers_nearest_in_order(targets, candidates) {
  "$plain targets";
  "$plain candidates";
  "One candidate for each target, both lists in rising order, where the candidates chosen rise with the targets, no candidate is chosen twice, and the distances between each target and its candidate add up to as little as they can.";
  "★ EACH TARGET IS NOT SIMPLY GIVEN ITS NEAREST CANDIDATE. Words sung to notes are the case this is for: two quick words can both lie nearest the same note, and taking the nearest for each would give two words one note and leave the next note unsung. Choosing all of them together keeps every word on a note of its own and in the order they are sung.";
  "★ CANDIDATES LEFT BETWEEN TWO CHOSEN ONES ARE SIMPLY NOT CHOSEN. A word held across several notes takes the first of them, and the rest belong to it without being named.";
  "It walks the targets one at a time keeping, for every candidate, the least total that ends there, and the best total ending anywhere before a candidate is carried forward as it walks, so the whole choice costs targets times candidates steps.";
  arguments_assert(arguments, 2);
  let count_targets = list_size(targets);
  let count_candidates = list_size(candidates);
  if (less_than(count_candidates, count_targets)) {
    error(
      "there are " +
        count_candidates +
        " candidates for " +
        count_targets +
        " targets",
    );
  }
  if (equal(count_targets, 0)) {
    let none = [];
    return none;
  }
  let totals = [];
  let previous_chosen = [];
  for (let i = 0; less_than(i, count_targets); i++) {
    let row = new Float64Array(count_candidates).fill(Infinity);
    let back = new Int32Array(count_candidates).fill(-1);
    let best = Infinity;
    let best_at = -1;
    for (let j = 0; less_than(j, count_candidates); j++) {
      let n = subtract(candidates[j], targets[i]);
      let distance = abs(n);
      if (equal(i, 0)) {
        row[j] = distance;
        continue;
      }
      if (
        greater_than(j, 0) &&
        less_than(totals[subtract(i, 1)][subtract(j, 1)], best)
      ) {
        best = totals[subtract(i, 1)][subtract(j, 1)];
        best_at = subtract(j, 1);
      }
      if (greater_than_equal(best_at, 0)) {
        row[j] = add(best, distance);
        back[j] = best_at;
      }
    }
    totals.push(row);
    previous_chosen.push(back);
  }
  let last = totals[subtract(count_targets, 1)];
  let at = 0;
  for (let j = 1; less_than(j, count_candidates); j++) {
    if (less_than(last[j], last[at])) {
      at = j;
    }
  }
  let chosen = [];
  for (let i = subtract(count_targets, 1); greater_than_equal(i, 0); i--) {
    chosen.unshift(candidates[at]);
    at = previous_chosen[i][at];
  }
  return chosen;
}

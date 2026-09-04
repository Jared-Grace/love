import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function lists_matched_indexes_earlier(
  size_before,
  size_after,
  before,
  after,
  table,
  indexes,
  cost_gap,
) {
  arguments_assert(arguments, 7);
  let walk_before = size_before;
  let walk_after = size_after;
  while (greater_than(walk_before, 0) && greater_than(walk_after, 0)) {
    let same = equal(
      before[subtract(walk_before, 1)],
      after[subtract(walk_after, 1)],
    )
      ? 1
      : -1;
    if (
      equal(
        table[walk_before][walk_after],
        table[subtract(walk_before, 1)][subtract(walk_after, 1)] + same,
      )
    ) {
      if (equal(same, 1)) {
        indexes[subtract(walk_before, 1)] = subtract(walk_after, 1);
      }
      walk_before = subtract(walk_before, 1);
      walk_after = subtract(walk_after, 1);
    } else if (
      equal(
        table[walk_before][walk_after],
        table[subtract(walk_before, 1)][walk_after] + cost_gap,
      )
    ) {
      walk_before = subtract(walk_before, 1);
    } else {
      walk_after = subtract(walk_after, 1);
    }
  }
  ("A word sung several times over is written down once, and the pairing above may land on any of those times, because every one of them scores the same. Sliding it back over the copies no other written word claimed puts it on the first of them, which is when the line it belongs to actually began.");
  ("The slide cannot change which words are paired or the order they are paired in: it only ever moves onto a place holding the same word that nothing else is using, and it stops the moment it meets one that is used, which is where the word above it sits.");
  let claimed = [];
  for (let j = 0; less_than(j, size_after); j++) {
    claimed.push(false);
  }
  for (let i = 0; less_than(i, size_before); i++) {
    let at = indexes[i];
    if (equal(at, null)) {
      continue;
    }
    claimed[at] = true;
  }
  for (let i = 0; less_than(i, size_before); i++) {
    let at = indexes[i];
    if (equal(at, null)) {
      continue;
    }
    let earlier = subtract(at, 1);
    while (
      greater_than_equal(earlier, 0) &&
      equal(after[earlier], after[at]) &&
      equal(claimed[earlier], false)
    ) {
      claimed[at] = false;
      claimed[earlier] = true;
      indexes[i] = earlier;
      at = earlier;
      earlier = subtract(at, 1);
    }
  }
}

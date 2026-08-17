import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { multiply_floor } from "./multiply_floor.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { equal_not } from "./equal_not.mjs";
export function g_arc_lengths_attempt(r3, settings) {
  arguments_assert(arguments, 2);
  let count = property_get(r3, "count");
  let turns_unspent = property_get(r3, "turns_unspent");
  let lengths = property_get(r3, "lengths");
  let shortest = property_get(r3, "shortest");
  let cap = property_get(r3, "cap");
  let arc_turns = property_get(r3, "arc_turns");
  let question_turns = property_get(r3, "question_turns");
  let matches = property_get(r3, "matches");
  let lines = property_get(r3, "lines");
  let next = property_get(r3, "next");
  for (
    let attempt = 0;
    less_than(attempt, settings.arc_length_swaps);
    attempt++
  ) {
    let left = next();
    let giver = multiply_floor(left, count);
    let left2 = next();
    let taker = multiply_floor(left2, count);
    let given = subtract(lengths[giver], 1);
    let taken = add(lengths[taker], 1);
    let stays_above = greater_than_equal(given, shortest);
    let stays_below = less_than_equal(taken, cap);
    let different = equal_not(giver, taker);
    if (stays_above && stays_below && different) {
      lengths[giver] = given;
      lengths[taker] = taken;
    }
  }
  let r = {
    turns_unspent,
    lengths,
    cap,
    arc_turns,
    question_turns,
    matches,
    lines,
  };
  return r;
}

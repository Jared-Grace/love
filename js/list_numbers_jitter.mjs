import { floor } from "./floor.mjs";
import { less_than } from "./less_than.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_add } from "./list_add.mjs";
export function list_numbers_jitter(numbers, next, attempts, least, most) {
  "Nudges a list of numbers about without changing what they add up to - each nudge takes one from a number and gives it to another.";
  "Generated quantities come out of arithmetic, and arithmetic LOOKS like arithmetic: an even split reads as everyone being the same person, and a descending run reads as a list being counted down. Moving single units about breaks the pattern without touching the total or the count, which are usually the two things the budget depends on.";
  "A move that would take a number outside its range is skipped rather than clamped, which is why the count is a number of ATTEMPTS rather than a promise. Clamping would pile numbers up on the ends it was added to protect.";
  "The generator is received, so the caller decides whether this is repeatable and what it is seeded on.";
  let jittered = [];
  for (let number of numbers) {
    list_add(jittered, number);
  }
  let count = jittered.length;
  for (let attempt = 0; less_than(attempt, attempts); attempt++) {
    let left = next();
    let scaled = multiply(left, count);
    let giver = floor(scaled);
    let left2 = next();
    let scaled2 = multiply(left2, count);
    let taker = floor(scaled2);
    let given = subtract(jittered[giver], 1);
    let taken = jittered[taker] + 1;
    let stays_above = greater_than_equal(given, least);
    let stays_below = less_than_equal(taken, most);
    let different = not_equal(giver, taker);
    let allowed = stays_above && stays_below && different;
    if (allowed) {
      jittered[giver] = given;
      jittered[taker] = taken;
    }
  }
  return jittered;
}

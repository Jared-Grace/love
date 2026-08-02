import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { random_bell } from "./random_bell.mjs";
export function random_bell_low_middle_high(next, low, middle, high) {
  "A whole number drawn near the middle, never under the low end, and reaching the high end only rarely.";
  "The two sides are scaled SEPARATELY, so the middle does not have to sit halfway between the ends. A conversation is six turns at the shortest, twelve most of the time, and twenty-four once in a while - the room above the middle is twice the room below it, and a draw that split the difference would have to either raise the floor or lower the ceiling to say that.";
  "Nothing is clamped. The bell already cannot leave minus one to one, so the answer already cannot leave low to high, and a clamp would only pile draws up on the ends it was added to protect.";
  let bell = random_bell(next);
  let above = greater_than(bell, 0);
  let reach_up = subtract(high, middle);
  let reach_down = subtract(middle, low);
  let reach = above ? reach_up : reach_down;
  let moved = multiply(bell, reach);
  let landed = middle + moved;
  let r = Math.round(landed);
  return r;
}

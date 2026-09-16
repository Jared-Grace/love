import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { and } from "./and.mjs";
export function number_within_is(value, middle, span) {
  arguments_assert(arguments, 3);
  ("Answers whether a number sits no further than SPAN away from MIDDLE, on either side.");
  ("Both ends count as within, because a span is written as a distance that is allowed");
  ("rather than as a distance that is too far.");
  ("It is asked as two comparisons rather than as the size of a difference, because the");
  ("difference of two numbers is negative half the time and the size of a negative number");
  ("is a second thing to get right for no gain. Two comparisons say the same thing and");
  ("each one reads as what it is.");
  let low = subtract(middle, span);
  let high = add(middle, span);
  let above = greater_than_equal(value, low);
  let below = less_than_equal(value, high);
  let within = and(above, below);
  return within;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { ternary } from "./ternary.mjs";
export function numbers_larger(first, second) {
  arguments_assert(arguments, 2);
  ("$plain first");
  ("$plain second");
  ("Whichever of two numbers is the larger, and the second of them when they are equal.");
  ("KEEPING THE BEST SCORE SEEN SO FAR IS THREE LINES WRITTEN OUT AND ONE LINE NAMED, and it is written out wherever something is compared against several things and only the strongest comparison is wanted. Written out it also invites the shape that reads the old value, decides, and assigns in three separate statements, where a later edit can leave the decision and the assignment disagreeing.");
  ("The second is handed back on a tie rather than the first, which cannot matter for a number and is stated only so that nobody has to work it out.");
  let bigger = greater_than(first, second);
  let larger = ternary(bigger, first, second);
  return larger;
}

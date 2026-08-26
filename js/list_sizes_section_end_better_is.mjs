import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
export function list_sizes_section_end_better_is(
  preferred,
  distance,
  best_preferred,
  best_distance,
) {
  "$plain preferred";
  "$plain distance";
  "$plain best_preferred";
  "$plain best_distance";
  "Whether one candidate place to end a section beats the best place found so far - a candidate that stands where the writing itself marks an ending beating every candidate that does not, and evenness deciding between two that are alike in that.";
  "THE ORDER IS LEXICOGRAPHIC AND THAT IS THE WHOLE POINT. The obvious way to say the same thing is to charge a marked place a discount and compare one blended number, and the discount is then a number nobody can defend: too small and a marked ending loses to a place a few characters more even, too large and the sections come out lopsided for the sake of a marking that was never there. Ranking the two questions instead needs no number at all, and says out loud which of them matters more.";
  "Nothing having been tried yet is answered yes rather than being treated as a rival to beat. A first candidate is always an improvement on nothing, and saying so here is what lets the search be written as one loop with no separate opening move.";
  arguments_assert(arguments, 4);
  let first = null_is(best_distance);
  if (first) {
    return true;
  }
  let right = not(best_preferred);
  let gained = and(preferred, right);
  if (gained) {
    return true;
  }
  let right2 = not(preferred);
  let lost = and(best_preferred, right2);
  if (lost) {
    return false;
  }
  let nearer = less_than(distance, best_distance);
  return nearer;
}

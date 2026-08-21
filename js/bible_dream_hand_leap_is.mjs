import { list_empty_is } from "./list_empty_is.mjs";
import { list_last } from "./list_last.mjs";
import { greater_than } from "./greater_than.mjs";
import { multiply } from "./multiply.mjs";
import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { bible_dream_hand_leap_far } from "./bible_dream_hand_leap_far.mjs";
export function bible_dream_hand_leap_is(points, point) {
  "Say whether a newly reported place for the hand is too far from the last one to be the same movement, so that the line has to be broken rather than carried across.";
  "It is asked of the places kept for drawing and not of the pointer's own history, because the question is whether a line may be drawn between two of them, and those are the only two a line would ever be drawn between.";
  "A run with nothing in it can hold no leap. There is no last place to be far from, and a line needs two ends.";
  "The comparison is left squared on both sides rather than rooted, because only the answer is wanted and not the distance, and squaring the one named number is cheaper than rooting every reported one.";
  if (list_empty_is(points)) {
    return false;
  }
  let last = list_last(points);
  let apart = bible_dream_point_gap_squared(point, last);
  let far = bible_dream_hand_leap_far();
  let far_squared = multiply(far, far);
  let leapt = greater_than(apart, far_squared);
  return leapt;
}

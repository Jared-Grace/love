import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { list_size } from "./list_size.mjs";
export function bible_dream_samples_loop_is(samples) {
  "Say whether a stroke's samples come back to where they started, which is what makes it a loop rather than a line with two ends.";
  "★ IT IS MEASURED AND NEVER DECLARED. Whether a shape closes is already written in the path itself - a cow's outline ends with a Z and a head of grain does not - so asking the samples is asking the one thing that cannot disagree with the drawing. A flag carried alongside the path could be set wrong, or stay right while the path changed underneath it, and nothing would say so: a loop mistaken for a line simply becomes untraceable past its seam, which looks exactly like a player giving up.";
  "The first and last samples are the same point on a closed path, because the walk runs from distance zero to the full length inclusive. So the test is whether those two are on top of each other, and the room allowed is a hundredth of a unit squared, far below any distance an open shape ever leaves between its ends.";
  let left = list_size(samples);
  let last = subtract(left, 1);
  let gap = bible_dream_point_gap_squared(samples[0], samples[last]);
  let l = less_than(gap, 0.01);
  return l;
}

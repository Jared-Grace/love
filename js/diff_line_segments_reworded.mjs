import { arguments_assert } from "./arguments_assert.mjs";
import { text_segments_changed } from "./text_segments_changed.mjs";
import { text_segments_joined } from "./text_segments_joined.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { text_segments_shared_size } from "./text_segments_shared_size.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { multiply } from "./multiply.mjs";
import { not } from "./not.mjs";
export function diff_line_segments_reworded(before, after) {
  "$plain before";
  "$plain after";
  "Two lines of a written-down change compared character by character where the one is plainly the other reworded, and nothing at all where they are two different lines that happen to have been written next to each other.";
  "★ MOST OF THE LINE HAS TO BE SHARED BEFORE THE TWO ARE CALLED ONE LINE. Any two lines of code share something - the indentation, a semicolon, the letters of `let` - so a comparison always comes back with stretches in it, and a comparison is therefore no evidence at all that there is one line here. Without a measure, a removed line and an unrelated added line below it would be welded into a single line that never existed in either the file or the change.";
  "IT IS MEASURED AGAINST THE LONGER OF THE TWO AND NOT THE SHORTER. Against the shorter, a short line wholly contained in a long one - a line that was a fragment of what replaced it - counts as entirely shared, and the drawing then shows a line most of which is marked as arriving, which is a rewrite drawn as a small edit.";
  "NOTHING COMES BACK RATHER THAN A JUDGEMENT COMING BACK BESIDE THE ANSWER, because the caller has no use for a comparison it has been told not to trust. Handed both, every caller would have to remember to ask, and the one that forgot would draw the welded line.";
  "TWO EMPTY LINES ARE A REWORDING, trivially, and are let through rather than divided by nothing.";
  arguments_assert(arguments, 2);
  let found = text_segments_changed(before, after);
  let segments = text_segments_joined(found);
  let longest = before.length;
  let after_longer = greater_than(after.length, longest);
  if (after_longer) {
    longest = after.length;
  }
  let nothing = equal(longest, 0);
  if (nothing) {
    return segments;
  }
  let shared_size = text_segments_shared_size(segments);
  let a = multiply(shared_size, 2);
  let most = greater_than_equal(a, longest);
  if (not(most)) {
    return null;
  }
  return segments;
}

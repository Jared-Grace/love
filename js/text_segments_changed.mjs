import { multiply } from "./multiply.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_segment_add } from "./text_segment_add.mjs";
import { text_common_lengths } from "./text_common_lengths.mjs";
export function text_segments_changed(before, after) {
  "$plain before";
  "$plain after";
  "Two pieces of text laid alongside each other as a run of stretches, each one saying either that both texts have it or that this is where they part, keeping the longest they can possibly share.";
  "THE LONGEST SHARED RUN IS TAKEN RATHER THAN THE FIRST ONE FOUND, which is what stops a line that only gained a capital letter and a full stop from being called different the whole way along. Walking from both ends inwards gives up at the first character that disagrees and calls everything between it and the far end changed.";
  "ORDER IS KEPT, so a stretch is where it is in the line rather than a set of characters with no place. This is why the words answer cannot be built on: a set has no order, so text merely rearranged comes back as nothing having moved at all.";
  "A PAIR TOO LONG TO COMPARE IS CALLED WHOLLY DIFFERENT rather than compared anyway. The table this walks costs one entry per pair of characters, so two long pieces of prose would hang the page drawing them; a reader meeting the whole line marked reads exactly what the page said before any of this was written, which is the right thing to fall back to.";
  arguments_assert(arguments, 2);
  let segments = [];
  let before_size = before.length;
  let after_size = after.length;
  let work = multiply(before_size, after_size);
  let too_long = greater_than(work, 250000);
  if (too_long) {
    text_segment_add(segments, false, before, after);
    return segments;
  }
  let table = text_common_lengths(before, after);
  let i = 0;
  let j = 0;
  while (less_than(i, before_size) || less_than(j, after_size)) {
    let before_left = less_than(i, before_size);
    let after_left = less_than(j, after_size);
    let shared = before_left && after_left && equal(before[i], after[j]);
    if (shared) {
      text_segment_add(segments, true, before[i], after[j]);
      i = i + 1;
      j = j + 1;
    }
    if (not(shared)) {
      let take_before = not(after_left);
      let both_left = before_left && after_left;
      if (both_left) {
        take_before = greater_than_equal(table[i + 1][j], table[i][j + 1]);
      }
      if (take_before) {
        text_segment_add(segments, false, before[i], "");
        i = i + 1;
      }
      if (not(take_before)) {
        text_segment_add(segments, false, "", after[j]);
        j = j + 1;
      }
    }
  }
  return segments;
}

import { multiply } from "./multiply.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_run_add } from "./text_run_add.mjs";
import { text_common_lengths } from "./text_common_lengths.mjs";
export function text_runs_changed(before, after) {
  "$plain before";
  "$plain after";
  "Two pieces of text each cut into runs saying which stretches of them are shared and which moved, so a page can draw both lines with the characters they have in common looking identical and only the differences standing out.";
  "IT ANSWERS CHARACTERS AND NOT WORDS, which is what the words answer could never do. Told which words went out and which came in, a reader still has to find them in the line themselves, and a word that only changed its ending is reported as one word leaving and another arriving.";
  "THE SHARED RUNS COME BACK IN BOTH ANSWERS AND ARE THE SAME TEXT IN EACH, so drawing them in one style on both lines is enough to make the two lines line up to the eye. That is what is being asked for: sameness shown by looking the same, rather than by a reader comparing.";
  "ORDER IS KEPT, so a run is where it is in the line rather than a set of characters with no place. This is why the words answer cannot be built on: a set has no order, so text merely rearranged comes back as nothing having moved at all.";
  "A PAIR TOO LONG TO COMPARE IS CALLED WHOLLY MOVED rather than compared anyway. The table costs one entry per pair of characters, so two long pieces of prose would hang the page drawing them; a reviewer meeting the whole line marked reads exactly what the page said before any of this was written, which is the right thing to fall back to.";
  arguments_assert(arguments, 2);
  let before_runs = [];
  let after_runs = [];
  let before_size = before.length;
  let after_size = after.length;
  let work = multiply(before_size, after_size);
  let too_long = greater_than(work, 250000);
  if (too_long) {
    text_run_add(before_runs, before, true);
    text_run_add(after_runs, after, true);
    let whole = {
      before_runs,
      after_runs,
    };
    return whole;
  }
  let table = text_common_lengths(before, after);
  let i = 0;
  let j = 0;
  while (less_than(i, before_size) || less_than(j, after_size)) {
    let before_left = less_than(i, before_size);
    let after_left = less_than(j, after_size);
    let shared = before_left && after_left && equal(before[i], after[j]);
    if (shared) {
      text_run_add(before_runs, before[i], false);
      text_run_add(after_runs, after[j], false);
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
        text_run_add(before_runs, before[i], true);
        i = i + 1;
      }
      if (not(take_before)) {
        text_run_add(after_runs, after[j], true);
        j = j + 1;
      }
    }
  }
  let r = {
    before_runs,
    after_runs,
  };
  return r;
}

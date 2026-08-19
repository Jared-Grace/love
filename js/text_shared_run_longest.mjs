import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_size } from "./text_size.mjs";
import { text_slice } from "./text_slice.mjs";
export function text_shared_run_longest(before, after) {
  "The longest unbroken run of letters both texts hold, or nothing at all where they share none.";
  "Counting the edits between two words says how far apart they are and not whether one is built out of the other. Two words can be several edits apart and still plainly kin, because one carries the whole of the other's middle with something wrapped round it - panudlo and tudlo share udlo, and no count of edits says so. Asking whether one word simply contains the other cannot say it either, because a letter changes at the seam where the pieces meet. The run they share is what survives both.";
  "The search stops growing a run the moment the other text stops holding it, because a longer run starting in the same place cannot be held either. That is what keeps a walk over every beginning and every end from being a walk over every pair of them.";
  "$plain before";
  "$plain after";
  "both name text to compare, never anything that runs.";
  let size_before = text_size(before);
  let longest = "";
  for (let start = 0; less_than(start, size_before); start++) {
    for (let end = add(start, 1); less_than(end, add(size_before, 1)); end++) {
      let run = text_slice(before, start, end);
      let held = text_includes(after, run);
      if (not(held)) {
        break;
      }
      let a = text_size(run);
      let b = text_size(longest);
      let bigger = greater_than(a, b);
      if (bigger) {
        longest = run;
      }
    }
  }
  return longest;
}

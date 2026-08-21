import { fn_name } from "./fn_name.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_includes_run } from "./list_includes_run.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function list_shared_run_longest(before, after) {
  "The longest run of items both lists hold back to back in the same order, or an empty list where they share none.";
  "IT ANSWERS THE QUESTION COUNTING SHARED ITEMS CANNOT. Two lists can hold most of the same items and never once hold two of them together, which is two things that merely resemble each other; and two lists can share only a short run and be one stretch of the same thing copied. A tally says how much overlaps, and this says whether any of it overlaps as a piece.";
  "The search stops growing a run the moment the other list stops holding it, because a longer run beginning in the same place cannot be held either. That is what keeps a walk over every beginning and every end from being a walk over every pair of them.";
  ("It is the list-shaped twin of ",
    fn_name("text_shared_run_longest"),
    ", which asks the same question of letters.");
  let size_before = list_size(before);
  let longest = [];
  for (let start = 0; less_than(start, size_before); start++) {
    for (let end = add(start, 1); less_than(end, add(size_before, 1)); end++) {
      let run = list_slice(before, start, end);
      let held = list_includes_run(after, run);
      if (not(held)) {
        break;
      }
      let a = list_size(run);
      let b = list_size(longest);
      let bigger = greater_than(a, b);
      if (bigger) {
        longest = run;
      }
    }
  }
  return longest;
}

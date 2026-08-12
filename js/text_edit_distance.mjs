import { text_split_empty } from "./text_split_empty.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_last } from "./list_last.mjs";
import { list_min } from "./list_min.mjs";
import { range } from "./range.mjs";
import { add } from "./add.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
export function text_edit_distance(before, after) {
  "How many one-letter edits - putting a letter in, taking a letter out, or swapping one letter for another - turn one word into the other. Nought means the two words are already the same.";
  "This is what a spelling suggestion is made of: the word somebody meant is the one their typing is fewest edits away from. Counting the edits rather than looking for a shared beginning is what lets a missing first letter be found - gl is one edit from tgl, and shares no beginning with it at all.";
  let letters_before = text_split_empty(before);
  let letters_after = text_split_empty(after);
  let size_before = list_size(letters_before);
  let size_after = list_size(letters_after);
  "The row carried through is the cost of reaching each length of the second word. It starts as the cost of building that word out of nothing at all, which is one insertion per letter.";
  let row = range(add(size_after, 1));
  for (let i = 0; less_than(i, size_before); i++) {
    "Each new row begins with the cost of throwing away everything read of the first word so far.";
    let row_next = [add(i, 1)];
    for (let j = 0; less_than(j, size_after); j++) {
      let letter_before = list_get(letters_before, i);
      let letter_after = list_get(letters_after, j);
      let same = equal(letter_before, letter_after);
      let cost = 1;
      if (same) {
        cost = 0;
      }
      let swapped = add(list_get(row, j), cost);
      let inserted = add(list_get(row_next, j), 1);
      let deleted = add(list_get(row, add(j, 1)), 1);
      let best = list_min([swapped, inserted, deleted]);
      list_add(row_next, best);
    }
    row = row_next;
  }
  let distance = list_last(row);
  return distance;
}

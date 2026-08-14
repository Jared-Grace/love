import { not } from "./not.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_add } from "./list_add.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
export function text_roots_unjoined(roots) {
  "Every pair of roots in a body of text where one root is the whole beginning of the other - the shape a word takes when it should have joined its own family and did not.";
  "Believe and belief, judge and judgment, righteous and righteousness, great and greater: each pair is one word a reader would see as one word and the rooting sees as two. Reading them off a real body of text is the point. A list of odd words written from memory only knows what somebody happened to think of, and the first such list here was missing wife within a minute of being looked at; a corpus knows which words it actually uses.";
  "Not every pair is a fault. Man and many begin the same and are not the same word, so this REPORTS rather than repairs - what to do with a pair is a judgment, and a wrong join is worse than a missing one.";
  "Two letters is too short to begin anything, and a tail of five letters or more is a different word rather than an ending, so neither is reported. Both bounds are there to keep the report readable rather than because they are exactly right.";
  "This knows nothing about what the text was FOR. It is handed roots and hands back pairs, so a bible, a sermon, a lesson or a page of prose all ask it the same way.";
  let named = list_unique(roots);
  let sorted = list_sort_text(named);
  let pairs = [];
  let index = 0;
  while (greater_than(sorted.length, index)) {
    let shorter = sorted[index];
    let ahead = add(index, 1);
    while (greater_than(shorter.length, 2) && greater_than(sorted.length, ahead)) {
      let longer = sorted[ahead];
      if (not(longer.startsWith(shorter))) {
        break;
      }
      let grew = subtract(longer.length, shorter.length);
      if (greater_than(5, grew)) {
        list_add(pairs, {
          shorter,
          longer,
        });
      }
      ahead = add(ahead, 1);
    }
    index = add(index, 1);
  }
  return {
    roots: named.length,
    pairs,
  };
}

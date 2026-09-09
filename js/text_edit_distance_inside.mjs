import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_size } from "./text_size.mjs";
import { range_from } from "./range_from.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_edit_distance } from "./text_edit_distance.mjs";
import { less_than } from "./less_than.mjs";
export function text_edit_distance_inside(word, part) {
  "Fewest one-letter edits turning one word into some stretch of a longer one, so nought means the shorter word is already spelled inside the longer one.";
  (fn_name("text_edit_distance"),
    " answers about two whole words, which is the wrong question to ask when one of them is meant to sit inside the other. Asked that way paagi and pinaagi come out two edits apart, and the two edits are the letters the longer word has spare rather than anything paagi is missing. Reading every stretch of the longer word and keeping the nearest asks the question that was meant, and a plain contains test is then just this answering nought.");
  ("What it buys over that contains test is a scale where a yes-or-no had none. A Cebuano root that is not spelled inside its own word may be one letter from it, because o and a trade places and a vowel drops out when an ending is put on, or it may share almost nothing with it. Counted, the first is ordinary word-building and the second is a claim somebody should read, and no contains test can tell those two apart.");
  ("The empty stretch is one of the stretches read, and the edits onto it are the whole of the shorter word, so the answer is never worse than that and the count never has to be guarded against being missing.");
  ("$plain word");
  ("$plain part");
  arguments_assert(arguments, 2);
  let word_size = text_size(word);
  let nearest = text_size(part);
  let starts = range_from(0, word_size);
  for (let from_index of starts) {
    let ends = range_from(from_index, word_size);
    for (let to_index of ends) {
      let stretch = text_slice(word, from_index, to_index);
      let edits = text_edit_distance(part, stretch);
      let nearer = less_than(edits, nearest);
      if (nearer) {
        nearest = edits;
      }
    }
  }
  return nearest;
}

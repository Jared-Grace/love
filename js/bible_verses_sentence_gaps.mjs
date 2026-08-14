import { arguments_assert } from "./arguments_assert.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { null_is } from "./null_is.mjs";
import { add_1 } from "./add_1.mjs";
import { bible_end_sentence_ahead } from "./bible_end_sentence_ahead.mjs";
import { list_add } from "./list_add.mjs";
export function bible_verses_sentence_gaps(verses) {
  "For each verse in a run, how many verses on the sentence it sits in finishes - the count of extra verses a passage cut there would be carried on by.";
  "This is the measurement behind the number a reader is shown. A passage asked for as four verses is carried on to the end of the sentence it stops in, and both the wording that warns them and the bound that stops the carrying were written against a guess: that a sentence finishes within a verse or two of where the counting stopped. Nobody had counted, and a guess about how OFTEN something happens cannot be checked against a range - only against a tally.";
  "It walks the run backwards, because the answer for a verse is one more than the answer for the verse after it, and going that way each verse is read once instead of the rest of the run being searched from every position.";
  "A verse that was never read breaks the chain rather than being skipped over, and a position with no sentence end left inside what was read is left out of the count entirely. Counting it at the edge of the sample would say the sentence finished exactly where the reading ran out, which is the one thing that is certainly untrue, and every such position would drag the tally down.";
  arguments_assert(arguments, 1);
  let backwards = list_copy_reverse(verses);
  let gaps = [];
  let unread = 0;
  let unfinished = 0;
  let ahead = null;
  for (let verse of backwards) {
    let unread_is = null_is(verse);
    if (unread_is) {
      ahead = null;
      unread = add_1(unread);
      continue;
    }
    ahead = bible_end_sentence_ahead(verse, ahead);
    let unfinished_is = null_is(ahead);
    if (unfinished_is) {
      unfinished = add_1(unfinished);
      continue;
    }
    list_add(gaps, ahead);
  }
  let measured = {
    gaps,
    unread,
    unfinished,
  };
  return measured;
}

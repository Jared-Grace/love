export function bible_ends_sentence_gaps(ends) {
  "Given, for each place a passage could stop, whether the sentence finished there, how far on it does finish - the count of extra verses a passage cut there would be carried on by.";
  "This is the measurement behind the number a reader is shown. A passage asked for as four verses is carried on to the end of the sentence it stops in, and both the wording that warns them and the bound that stops the carrying were written against a guess: that a sentence finishes within a verse or two of where the counting stopped. Nobody had counted, and a guess about how OFTEN something happens cannot be checked against a range - only against a tally.";
  "It walks the run backwards, because the answer for a place is one more than the answer for the place after it, and going that way each is read once instead of the rest of the run being searched from every position.";
  "A place whose answer is null breaks the chain rather than being skipped over, and a place with no sentence end left inside what was read is left out of the count entirely. Counting it at the edge of the sample would say the sentence finished exactly where the reading ran out, which is the one thing that is certainly untrue, and every such place would drag the tally down.";
  arguments_assert(arguments, 1);
  let backwards = list_copy_reverse(ends);
  let gaps = [];
  let unread = 0;
  let unfinished = 0;
  let ahead = null;
  for (let end of backwards) {
    let unread_is = null_is(end);
    if (unread_is) {
      ahead = null;
      unread = add_1(unread);
      continue;
    }
    ahead = bible_end_sentence_ahead(end, ahead);
    let unfinished_is = null_is(ahead);
    if (unfinished_is) {
      unfinished = add_1(unfinished);
      continue;
    }
    list_add(gaps, ahead);
  }
  let measured = { gaps, unread, unfinished };
  return measured;
}

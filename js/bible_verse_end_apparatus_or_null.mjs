import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
import { bible_verse_end_bracket_start_or_null } from "./bible_verse_end_bracket_start_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_take } from "./text_take.mjs";
import { not } from "./not.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
export function bible_verse_end_apparatus_or_null(text) {
  "$plain text";
  "Answers the bracketed span standing at the end of a verse with a finished sentence behind it, or nothing when the verse has no such span.";
  "A verse that ends a sentence and then prints a cross reference in brackets answers that it did not finish one, because the bracket closes on a figure rather than on a mark. So a page that carries a reading on until the sentence ends fetches another verse, and the reader who asked for one gets two. That was met on 2026-09-05 in a Hindi bible, whose first chapter ends two of its sixteen verses on a reference to another book.";
  "IT IS THE SAME FAULT AS A CLOSING MARK NOBODY TAKES OFF, ONE LAYER OUT, and the detector for that one cannot reach it. That detector stops the moment it meets a letter or a figure, which it must, or it walks past the very mark it is hunting - and what stands in the way here is a whole span of words and figures rather than one mark. So the two are asked separately.";
  "WHERE THE SPAN BEGINS IS ASKED FOR RATHER THAN WALKED TO HERE, because the trimming beside this answers the same question on its way to a different one, and a walk written out twice drifts until the two are reporting about different spans.";
  "IT ANSWERS THE SPAN AND NOT A VERDICT, so that whoever reads the record can see what was actually printed there before anything decides to take it off.";
  let ended = bible_verse_end_is(text);
  if (ended) {
    return null;
  }
  let start = bible_verse_end_bracket_start_or_null(text);
  let none = null_is(start);
  if (none) {
    return null;
  }
  let squeezed = text_trim(text);
  let before = text_take(squeezed, start);
  let finished = bible_verse_end_is(before);
  if (not(finished)) {
    return null;
  }
  let apparatus = text_slice_from(squeezed, start);
  return apparatus;
}

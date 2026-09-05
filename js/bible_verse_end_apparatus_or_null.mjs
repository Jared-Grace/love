import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_last } from "./text_last.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { null_is } from "./null_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { list_find_indices } from "./list_find_indices.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_last } from "./list_last.mjs";
import { text_take } from "./text_take.mjs";
import { not } from "./not.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
export function bible_verse_end_apparatus_or_null(text) {
  "$plain text";
  "Answers the bracketed span standing at the end of a verse with a finished sentence behind it, or nothing when the verse has no such span.";
  "A verse that ends a sentence and then prints a cross reference in brackets answers that it did not finish one, because the bracket closes on a figure rather than on a mark. So a page that carries a reading on until the sentence ends fetches another verse, and the reader who asked for one gets two. That was met on 2026-09-05 in a Hindi bible, whose first chapter ends two of its sixteen verses on a reference to another book.";
  "IT IS THE SAME FAULT AS A CLOSING MARK NOBODY TAKES OFF, ONE LAYER OUT, and the detector for that one cannot reach it. That detector stops the moment it meets a letter or a figure, which it must, or it walks past the very mark it is hunting - and what stands in the way here is a whole span of words and figures rather than one mark. So the two are asked separately.";
  "THE SPAN MUST CLOSE THE VERSE AND NOT MERELY STAND IN IT. A bracket in the middle of a verse with a full stop before it is ordinary writing, and cutting from there would answer with the whole remainder of the verse and call it apparatus. Requiring the verse to end on the closing bracket is what tells a reference printed after the sentence apart from a parenthesis printed inside one.";
  "WHICH BRACKETS COUNT IS ASKED OF UNICODE RATHER THAN WRITTEN OUT, because every time this shape of question has been answered from a hand-written list the list has been short - and a bible arrives in whatever script it was translated into. An opening quotation is left out on purpose: a quotation is the verse speaking, not an editor writing beside it.";
  "IT ANSWERS THE SPAN AND NOT A VERDICT, so that whoever reads the record can see what was actually printed there before anything decides to take it off.";
  let ended = bible_verse_end_is(text);
  if (ended) {
    return null;
  }
  let squeezed = text_trim(text);
  let empty = text_empty_is(squeezed);
  if (empty) {
    return null;
  }
  let closers = new RegExp("^\\p{Pe}$", "u");
  let last = text_last(squeezed);
  let closed = text_regex_match(last, closers);
  let unclosed = null_is(closed);
  if (unclosed) {
    return null;
  }
  let openers = new RegExp("^\\p{Ps}$", "u");
  function bible_verse_end_apparatus_opener_is(character) {
    let matched = text_regex_match(character, openers);
    let opening = null_not_is(matched);
    return opening;
  }
  let characters = text_split_empty(squeezed);
  let indices = list_find_indices(
    characters,
    bible_verse_end_apparatus_opener_is,
  );
  let none = list_empty_is(indices);
  if (none) {
    return null;
  }
  let start = list_last(indices);
  let before = text_take(squeezed, start);
  let finished = bible_verse_end_is(before);
  if (not(finished)) {
    return null;
  }
  let apparatus = text_slice_from(squeezed, start);
  return apparatus;
}

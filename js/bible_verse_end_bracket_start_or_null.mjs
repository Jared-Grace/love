import { arguments_assert } from "./arguments_assert.mjs";
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
export function bible_verse_end_bracket_start_or_null(text) {
  "$plain text";
  "Where, in the verse once its outer spaces are off, the bracketed span that closes it begins - or nothing when the verse does not close on a bracket at all.";
  "★ TWO QUESTIONS STAND ON THIS ONE AND THEY ARE DIFFERENT QUESTIONS. One asks what the span says, so that whoever reads the record can see what an editor actually printed there; the other takes the span off and asks whether a sentence mark was hiding behind it. Both had to find the span first, and both found it by writing the same walk out - trim, is it closed, where does the last opening bracket stand. Two copies of a walk do not break, they drift, and a walk that drifts here answers about a different span than the one being reported.";
  "★ THE SPAN MUST CLOSE THE VERSE AND NOT MERELY STAND IN IT. A bracket in the middle of a verse with a full stop before it is ordinary writing, and cutting from there would answer with the whole remainder of the verse. Requiring the verse to end on the closing bracket is what tells a reference printed after the sentence apart from a parenthesis printed inside one.";
  "★ WHICH BRACKETS COUNT IS ASKED OF UNICODE RATHER THAN WRITTEN OUT, because every time this shape of question has been answered from a hand-written list the list has been short - and a bible arrives in whatever script it was translated into. An opening quotation is left out on purpose: a quotation is the verse speaking, not an editor writing beside it.";
  "★ A PLACE OF NOUGHT IS AN ANSWER AND NOT AN ABSENCE, which is why nothing is spelled as null here rather than as a number outside the verse. A verse that is nothing but a bracketed span begins its span at nought, and a caller that asked whether the answer was truthy would read that as no span at all.";
  "It answers a place rather than the span itself, because one caller wants the span and the other wants everything in front of it, and a place gives both without either having to cut twice.";
  arguments_assert(arguments, 1);
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
  function bible_verse_end_bracket_opener_is(character) {
    let matched = text_regex_match(character, openers);
    let opening = null_not_is(matched);
    return opening;
  }
  let characters = text_split_empty(squeezed);
  let indices = list_find_indices(
    characters,
    bible_verse_end_bracket_opener_is,
  );
  let none = list_empty_is(indices);
  if (none) {
    return null;
  }
  let start = list_last(indices);
  return start;
}

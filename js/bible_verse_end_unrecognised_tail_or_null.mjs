import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
import { bible_verse_trim_right } from "./bible_verse_trim_right.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_last } from "./text_last.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { null_is } from "./null_is.mjs";
import { bible_verse_end_tail_count } from "./bible_verse_end_tail_count.mjs";
import { text_take_end_count } from "./text_take_end_count.mjs";
export function bible_verse_end_unrecognised_tail_or_null(text) {
  "$plain text";
  "Answers the closing words of a verse that finished on a letter or a figure rather than on any mark at all, or nothing when it finished on a mark.";
  "A verse that does not end a sentence has two quite different reasons for it and the last character alone cannot tell them apart. A comma says the translator cut the verse mid-clause and there is nothing here to repair. A letter says there is no mark at the end at all, and that has been seen to mean the mark is really there with something standing behind it - a cross reference in brackets, a footnote figure - in which case the sentence did finish and a reader is being carried on past it.";
  "SO THE WORDS THEMSELVES ARE WRITTEN DOWN AND NOT A VERDICT ON THEM. What stands behind a hidden mark was different every time it has been met, and a rule written before reading any of them would only find the shape it was written for. The record is what somebody reads to work out what the shape is.";
  "A COMBINING MARK COUNTS AS A LETTER HERE, because in the scripts that use them a vowel sign is the end of a word exactly as a letter is, and treating it as punctuation would drop nine bibles out of the reading for no reason.";
  let ended = bible_verse_end_is(text);
  if (ended) {
    return null;
  }
  let trimmed = bible_verse_trim_right(text);
  let empty = text_empty_is(trimmed);
  if (empty) {
    return null;
  }
  let last = text_last(trimmed);
  let wordish = new RegExp("^[\\p{L}\\p{N}\\p{M}]$", "u");
  let matched = text_regex_match(last, wordish);
  let marked = null_is(matched);
  if (marked) {
    return null;
  }
  let count = bible_verse_end_tail_count();
  let tail = text_take_end_count(trimmed, count);
  return tail;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_line_notes_removed } from "./bible_usfm_line_notes_removed.mjs";
import { bible_verse_trim_right } from "./bible_verse_trim_right.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
export function bible_usfm_line_semicolon_end_is(usfm_line) {
  arguments_assert(arguments, 1);
  ("$plain usfm_line");
  ("Whether one line of a chapter of usfm ends on a semicolon, once the translators' notes are off it and trailing space is trimmed.");
  ("The trimming is the same trimming a sentence's end is asked through, because a printing that leaves a space after the mark on one line leaves it on another, and a question answered two ways about the same line would start to disagree.");
  ("A semicolon is not one of the marks a sentence is allowed to end on and must not be added to that list, because that list answers for every bible on this disk - what a verse's words come to a stop on, which a gloss and a reading aloud both rest on. This is a second question about the same line rather than a wider answer to the first.");
  let unnoted = bible_usfm_line_notes_removed(usfm_line);
  let trimmed = bible_verse_trim_right(unnoted);
  let ended = text_ends_with(trimmed, ";");
  return ended;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_line_notes_removed } from "./bible_usfm_line_notes_removed.mjs";
import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
export function bible_usfm_line_sentence_end_is(usfm_line) {
  arguments_assert(arguments, 1);
  ("$plain usfm_line");
  ("Whether one line of a chapter of usfm finishes a sentence - whether the words printed on it come to a full stop, a question mark or whatever else the translation ends a sentence on.");
  ("★ THE NOTES COME OFF BEFORE THE QUESTION IS ASKED, AND THAT IS THE WHOLE OF WHY THIS IS A NAME OF ITS OWN. A printing hangs its footnote on the end of the line the note is about, so the last thing written on the line is the note's marks rather than the sentence's stop. Asked of the line as it stands, a line that plainly finishes a sentence answers no - and a verse cut by where its sentences end would then be cut in the wrong place, or refuse to be cut at all.");
  ("What counts as the end of a sentence is asked elsewhere and not decided here, because the same question is already answered for every bible on this disk, closing quotes and cross references and all. A second answer would agree today and drift.");
  ("Taking the notes off is asked elsewhere too, because the question of how a line ends is asked more than one way and each way needs the same line to ask it of.");
  let unnoted = bible_usfm_line_notes_removed(usfm_line);
  let ended = bible_verse_end_is(unnoted);
  return ended;
}

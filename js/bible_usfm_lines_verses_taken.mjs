import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_verse_end_read } from "./bible_usfm_verse_end_read.mjs";
import { null_is } from "./null_is.mjs";
import { bible_usfm_lines_verse_pieces } from "./bible_usfm_lines_verse_pieces.mjs";
import { bible_usfm_lines_verse_piece_first } from "./bible_usfm_lines_verse_piece_first.mjs";
import { bible_usfm_lines_verse_piece_last } from "./bible_usfm_lines_verse_piece_last.mjs";
import { greater_than } from "./greater_than.mjs";
import { add } from "./add.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { list_last } from "./list_last.mjs";
import { bible_usfm_marker_rest } from "./bible_usfm_marker_rest.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_pop } from "./list_pop.mjs";
export function bible_usfm_lines_verses_taken(
  usfm_lines,
  verse_first,
  verse_last,
) {
  arguments_assert(arguments, 3);
  ("$plain usfm_lines");
  ("$plain verse_first");
  ("$plain verse_last");
  ("The lines of usfm that are one passage of a chapter, cut out of the chapter's own lines by the two ends of the passage - or nothing at all, when the chapter does not hold both of those ends.");
  ("★ NOTHING IS ANSWERED RATHER THAN A PASSAGE THAT IS NEARLY THE ONE ASKED FOR. Every way this can fail is a way of ending up with the wrong words: an end written as something that is not an end, an end naming a verse the chapter has not got, a piece of a verse the printing never divided, or two ends the wrong way round. A passage that is nearly right reads perfectly well and is sung against the wrong recording, which nothing downstream can notice.");
  ("The cut is made by where the two ends fall and not by keeping only the lines that belong to the passage, so a break the printing makes in the middle of the passage is carried out with it. That break is the stanza it divides; dropping it would join two stanzas the printing keeps apart.");
  ("A break left standing at the end is taken off again, because a break is the printing saying what comes next and here nothing does. It would come out as a blank line hanging under the passage, which is a stanza that never arrives.");
  let first = bible_usfm_verse_end_read(verse_first);
  let last = bible_usfm_verse_end_read(verse_last);
  if (null_is(first)) {
    return null;
  }
  if (null_is(last)) {
    return null;
  }
  let marks = bible_usfm_lines_verse_pieces(usfm_lines);
  let index_first = bible_usfm_lines_verse_piece_first(marks, first);
  let index_last = bible_usfm_lines_verse_piece_last(marks, last);
  if (null_is(index_first)) {
    return null;
  }
  if (null_is(index_last)) {
    return null;
  }
  let backwards = greater_than(index_first, index_last);
  if (backwards) {
    return null;
  }
  let after = add(index_last, 1);
  let taken = list_slice(usfm_lines, index_first, after);
  let going = true;
  while (going) {
    let empty = list_empty_is(taken);
    going = not(empty);
    if (going) {
      let line = list_last(taken);
      let split = bible_usfm_marker_rest(line);
      going = property_equals(split, "marker", "b");
      if (going) {
        list_pop(taken);
      }
    }
  }
  return taken;
}

import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function bible_usfm_lines_verse_piece_first(marks, end) {
  arguments_assert(arguments, 2);
  ("$plain marks");
  ("$plain end");
  ("Where in a chapter a passage opening at this end begins - the place of the first line that is inside it - or nothing at all, when the chapter has no such place.");
  ("A whole verse opens at its own first line, and a lettered piece of one opens at the first line of that piece. The two are the same reading because a whole verse asks for piece naught and every line of the verse stands at piece one or later.");
  ("★ A PIECE THE VERSE DOES NOT HAVE IS ANSWERED WITH NOTHING RATHER THAN WITH THE VERSE. The pieces of a verse only ever count upwards through it, so the piece the last of its lines stands at is how many pieces it has; asking for a later one is asking for something the printing never wrote, and handing back the whole verse instead would be a passage silently longer than the one that was asked for.");
  let wanted_verse = property_get(end, "number");
  let wanted_piece = property_get(end, "piece");
  let size = list_size(marks);
  let index_first = -1;
  let pieces = 0;
  for (let index = 0; less_than(index, size); index++) {
    let mark = marks[index];
    let verse = property_get(mark, "verse");
    let piece = property_get(mark, "piece");
    let theirs = equal(verse, wanted_verse);
    if (theirs) {
      pieces = piece;
      let reached = greater_than_equal(piece, wanted_piece);
      let waiting = equal(index_first, -1);
      if (reached && waiting) {
        index_first = index;
      }
    }
  }
  let past = greater_than(wanted_piece, pieces);
  if (past) {
    return null;
  }
  let missing = equal(index_first, -1);
  if (missing) {
    return null;
  }
  return index_first;
}

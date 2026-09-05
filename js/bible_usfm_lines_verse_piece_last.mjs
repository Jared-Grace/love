import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function bible_usfm_lines_verse_piece_last(marks, end) {
  arguments_assert(arguments, 2);
  ("$plain marks");
  ("$plain end");
  ("Where in a chapter a passage closing at this end stops - the place of the last line that is still inside it - or nothing at all, when the chapter has no such place.");
  ("A whole verse closes on its own last line, and a lettered piece of one closes on the last line of that piece. A whole verse asks for piece naught, and naught is below every line of the verse rather than above them, so it is answered on its own terms rather than by the comparison the lettered ends use.");
  ("★ A PIECE THE VERSE DOES NOT HAVE IS ANSWERED WITH NOTHING RATHER THAN WITH THE VERSE, which is the same refusal the opening end makes and matters more here. Every line of the verse stands at a piece below a piece the verse has not got, so a comparison alone would say the whole verse is inside the passage and the passage would quietly grow to the end of the verse without anything going wrong.");
  let wanted_verse = property_get(end, "number");
  let wanted_piece = property_get(end, "piece");
  let whole = equal(wanted_piece, 0);
  let size = list_size(marks);
  let index_last = -1;
  let pieces = 0;
  for (let index = 0; less_than(index, size); index++) {
    let mark = marks[index];
    let verse = property_get(mark, "verse");
    let piece = property_get(mark, "piece");
    let theirs = equal(verse, wanted_verse);
    if (theirs) {
      pieces = piece;
      let inside = less_than_equal(piece, wanted_piece);
      if (whole) {
        inside = true;
      }
      if (inside) {
        index_last = index;
      }
    }
  }
  let past = greater_than(wanted_piece, pieces);
  if (past) {
    return null;
  }
  let missing = equal(index_last, -1);
  if (missing) {
    return null;
  }
  return index_last;
}

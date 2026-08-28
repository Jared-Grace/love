import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_word_marks_edge } from "./bible_glyph_word_marks_edge.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { bible_glyph_name_picture_is } from "./bible_glyph_name_picture_is.mjs";
export function bible_glyph_word_edge_picture_is(word, at_end, lookup) {
  arguments_assert(arguments, 3);
  ("$plain word");
  ("$plain at_end");
  ("$plain lookup");
  ("the word is one stored word of a verse, the flag says which end of it to look at, and the lookup is the table of what each glyph name draws as. All three are data to read and none of them runs.");
  ("Whether the thing this word actually touches its neighbour with, at the end asked about, is a picture.");
  ("IT IS THE QUESTION A GAP IS DECIDED BY, and it is one question rather than two on purpose. ",
    fn_name("bible_glyph_word_marks_edge"),
    " says whether the edge is marks or text; this says whether those marks draw as anything a reader would call a picture. Either answer alone widens the wrong gaps, so the two are asked together here and nowhere else.");
  ("SEATED IS NOT DRAWN, and four words prove it. An altar and a priest have no emoji and no artwork anywhere, so the table hands their own English name back and the page prints letters. Those letters cannot be misread as running into the next word - they ARE a word - so the wide gap beside them was a mark spent on nothing, which is the same waste it was built to stop.");
  ("ONLY THE OUTERMOST PICTURE CAN COLLIDE, which is why this walks all the way down to one name. A word ending in three marks touches its neighbour with the last of them and with nothing else, and if that last mark is a group written with a plus then it touches with the group's second half. Everything further in already has a picture of its own on both sides.");
  ("A GROUP HAS TO BE SPLIT HERE OR THE ANSWER IS ALWAYS NO. The table holds a character for every single picture and nothing at all for a name with a plus in it, because a group is drawn by drawing its halves side by side and is never one character. Asking the table about the whole field would quietly report every group as ordinary text and take the wide gap away from exactly the words that need it most.");
  ("EVERY MISSING THING ANSWERS NO, which is the safe direction and is what keeps this free of the checks its callers would otherwise repeat. The only thing a yes ever does is widen a gap, so anything unknown gets an ordinary space and reads as ordinary text.");
  let marks = bible_glyph_word_marks_edge(word, at_end);
  let text_edge = null_is(marks);
  if (text_edge) {
    let letters = false;
    return letters;
  }
  let empty = list_empty_is(marks);
  if (empty) {
    let nothing = false;
    return nothing;
  }
  let glyph = at_end ? list_last(marks) : list_first(marks);
  let names = bible_glyph_group_names(glyph);
  let none = list_empty_is(names);
  if (none) {
    let blank = false;
    return blank;
  }
  let outer = at_end ? list_last(names) : list_first(names);
  let r = bible_glyph_name_picture_is(outer, lookup);
  return r;
}

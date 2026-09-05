import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { list_first } from "./list_first.mjs";
import { usfm_number_rest } from "./usfm_number_rest.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_marker_rest } from "./bible_usfm_marker_rest.mjs";
import { property_equals } from "./property_equals.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
export function bible_usfm_lines_verse_pieces(usfm_lines) {
  arguments_assert(arguments, 1);
  ("$plain usfm_lines");
  ("Which verse each line of a chapter of usfm belongs to, and which piece of that verse it belongs to - one answer for every line handed in, in the same order.");
  ("★ THE PIECES ARE READ OFF THE PRINTING RATHER THAN INVENTED, WHICH IS WHAT MAKES A HALF VERSE ADDRESSABLE AT ALL. A verse cut in two is written that way in the file: the couplet that opens it is marked as a first step of poetry, and where the printing starts a second couplet inside the same verse it marks a first step again. Counting those marks within a verse is counting the pieces the printing itself put there. Splitting the verse's lines down the middle would have come to the same answer for Psalm 145 and to a made-up one everywhere else.");
  ("The verse mark is looked for anywhere in the line and not only at its front, because a bible that prints poetry hangs the mark on the step that opens the couplet and the step is what starts the line.");
  ("A verse spanning two numbers is written as a number, a dash and another number, which is not a number. Such a line is answered as belonging to no verse anybody can name, so a caller asking for a passage that ends there is told no rather than handed a passage that quietly ran on.");
  ("The lines before the first verse mark belong to verse naught, which is no verse. A psalm's title is written there and is not part of any verse of it.");
  let marks = [];
  let verse = 0;
  let piece = 0;
  for (let usfm_line of usfm_lines) {
    let pieces = text_split(usfm_line, "\\v ");
    let size = list_size(pieces);
    let opened = greater_than(size, 1);
    if (opened) {
      let after = list_skip_1(pieces);
      let numbered = list_first(after);
      let read = usfm_number_rest(numbered);
      let written = property_get(read, "number");
      verse = Number(written);
      piece = 0;
    }
    let split = bible_usfm_marker_rest(usfm_line);
    let stepped = property_equals(split, "marker", "q1");
    if (stepped) {
      piece = add(piece, 1);
    }
    let mark = {
      verse: verse,
      piece: piece,
    };
    list_add(marks, mark);
  }
  return marks;
}

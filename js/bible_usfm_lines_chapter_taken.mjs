import { arguments_assert } from "./arguments_assert.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { text_trim } from "./text_trim.mjs";
import { bible_usfm_marker_rest } from "./bible_usfm_marker_rest.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_first } from "./text_split_first.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function bible_usfm_lines_chapter_taken(lines, chapter_number) {
  arguments_assert(arguments, 2);
  ("$plain lines");
  ("$plain chapter_number");
  ("The lines of one chapter, taken out of the lines of a whole book of usfm - everything standing after that chapter's own mark and before the next one.");
  ("The number is compared as the file writes it rather than counted to, so a chapter is found by the name the printing gives it. Counting would come to the same answer in every ordinary book and to the wrong one in the first book that numbers its chapters unusually.");
  ("The chapter asked for is written out as text before the comparison, because the file writes it as text and the comparison is exact. A caller holding the chapter as a number is the ordinary case - a picker hands one back, a page carries one in its address - and such a caller matched nothing at all here and was told so by an empty answer rather than by an error. That is the worst way for this to fail: a whole psalm reads as a passage with no lines in it, and every reader above says so in its own words instead of naming the number.");
  ("The comparison is made on the number alone and not on the mark and the number together as one piece of writing. Chapter fourteen's mark is the whole of the front of chapter a hundred and forty-nine's, so a reader matching the front of the line would open at fourteen and stay open, and the answer would be a hundred and thirty-five chapters long.");
  ("What stands before the first chapter mark is left behind with everything else that is not the chapter asked for. That is the book's name and its running heads, which belong to the book rather than to any chapter of it.");
  let wanted = text_from_number(chapter_number);
  let taken = [];
  let inside = false;
  for (let line of lines) {
    let trimmed = text_trim(line);
    let split = bible_usfm_marker_rest(trimmed);
    let chaptered = property_equals(split, "marker", "c");
    if (chaptered) {
      let rest = property_get(split, "rest");
      let number = text_split_first(rest, " ");
      inside = equal(number, wanted);
    }
    if (inside) {
      if (not(chaptered)) {
        list_add(taken, trimmed);
      }
    }
  }
  return taken;
}

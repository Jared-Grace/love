import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { usfm_number_rest } from "./usfm_number_rest.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ternary } from "./ternary.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_trim } from "./text_trim.mjs";
export function bible_usfm_verse_numbers_inlined(
  usfm_line,
  verse_numbers_shown,
) {
  arguments_assert(arguments, 2);
  ("$plain usfm_line");
  ("$plain verse_numbers_shown");
  ("One line of usfm with each of its verse marks turned into the verse's number standing in the words, or taken away altogether when the numbers are not wanted.");
  ("The number goes into the words rather than beside them because a line is not a verse. A paragraph of prose carries three or four verses on the one line, so a number kept beside the line could only ever name the first of them and the rest would vanish.");
  ("Doing it here, before the marks are cleared, is the only moment it can be done. Once the marks are gone there is nothing left to say where one verse ended and the next began, and no amount of reading the sentence afterwards puts that back.");
  ("Both answers come out of one reading rather than two, so a passage with its numbers and the same passage without them can only ever differ by the numbers. Written as two readings they could come to disagree about where a line breaks, and the disagreement would show up as a passage that had quietly changed shape.");
  let pieces = text_split(usfm_line, "\\v ");
  let before = list_first(pieces);
  let marked = list_skip_1(pieces);
  let kept = [before];
  for (let piece of marked) {
    let split = usfm_number_rest(piece);
    let number = property_get(split, "number");
    let words = property_get(split, "rest");
    let numbered = text_combine_multiple([number, " ", words]);
    let shown = ternary(verse_numbers_shown, numbered, words);
    list_add(kept, shown);
  }
  let joined = list_join_space(kept);
  let trimmed = text_trim(joined);
  return trimmed;
}

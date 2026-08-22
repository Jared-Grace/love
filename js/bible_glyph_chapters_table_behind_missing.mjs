import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { bible_glyph_chapters_table_behind_absent } from "./bible_glyph_chapters_table_behind_absent.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { property_set } from "./property_set.mjs";
export function bible_glyph_chapters_table_behind_missing(rows, used) {
  "Every picture the root table would seat for the words of one chapter that the chapter itself never draws, kept once each with the word it would land on and how many times that word comes round.";
  "IT IS COUNTED BY PICTURE AND NOT BY WORD, because a person reading this is going to open the chapter and draw one thing. Two words seated on the same picture are one piece of work, and reporting them apart would say there was twice as much of it.";
  "THE FIRST WORD SEEN KEEPS THE NAMING. The original, the English and the number are taken off whichever word reached the picture first and never written over, so the answer does not change with the order the verses happen to be read in.";
  "A WORD THE TABLE SEATS NOTHING FOR IS NOT A GAP. An empty picture means the table never had one, which is a table that has not grown rather than a chapter that has fallen behind.";
  arguments_assert(arguments, 2);
  let missing = {};
  for (let row of rows) {
    for (let word of row.words) {
      let glyph = property_get(word, "glyph");
      let blank = equal(glyph, "");
      if (blank) {
        continue;
      }
      let absent = bible_glyph_chapters_table_behind_absent(used, glyph);
      if (not(absent)) {
        continue;
      }
      let seen = property_or_null(missing, glyph);
      let first = null_is(seen);
      if (first) {
        seen = {
          glyph,
          original: property_get(word, "original"),
          gloss: property_get(word, "gloss"),
          strong: property_get(word, "strong"),
          occurrences: 0,
        };
        property_set(missing, glyph, seen);
      }
      seen.occurrences = add(seen.occurrences, 1);
    }
  }
  return missing;
}

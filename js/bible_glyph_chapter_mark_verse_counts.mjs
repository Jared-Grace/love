import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapter_mark_verse_counts(
  chapter_code,
  glyph,
) {
  "$plain chapter_code";
  "the code names one already-authored picture chapter to read. It names a stretch of text and nothing that runs.";
  "$plain glyph";
  "the name of one mark. It is compared as a name and nothing runs it.";
  arguments_assert(arguments, 2);
  ("Where one mark of one chapter stands, verse by verse: how many times the root table seats it in that verse and how many times the chapter actually draws it, for every verse that has either.");
  ("IT IS WHAT A DOUBLED MARK IS REPAIRED WITH, and until it existed the repair had no way in. The chapter-wide reading says a mark was drawn eleven times where the table seats it twice; it cannot say which nine to pull back, and the glossed draft cannot say either, because a mark named after its own English word renders in that draft as that word and the drawn one is indistinguishable from the plain one. The count taken inside a verse is the only thing that separates them.");
  ("A VERSE WHERE DRAWN IS ABOVE SEATED IS THE WHOLE OF THE FAULT AND THE WHOLE OF THE REPAIR. The table seats a mark on an original root, so a verse drawing more of them than the table seats has put the picture on a second root that English happened to give the same word to. Pulling the extras in that verse back to plain letters is the repair, and no other verse of the chapter needs opening.");
  ("BOTH SIDES ARE KEPT EVEN WHERE THEY AGREE, because a reader looking at a chapter needs to see the verses that are right in order to trust the ones that are not. Handing back only the disagreements would give the same answer as a reading that had failed to find the chapter at all.");
  let filed_rows = await bible_glyph_chapter_rows_filed(chapter_code);
  let rows = property_get(filed_rows, "rows");
  let seated_by_verse = {};
  for (let row of rows) {
    let number = property_get(row, "verse_number");
    let seated = 0;
    let words = property_get(row, "words");
    for (let token of words) {
      let word_glyph = property_get(token, "glyph");
      let same = equal(word_glyph, glyph);
      if (not(same)) {
        continue;
      }
      seated = add(seated, 1);
    }
    property_set(seated_by_verse, number, seated);
  }
  let parsed = bible_glyph_chapter(chapter_code);
  let verses = property_get(parsed, "verses");
  let lines = [];
  for (let verse of verses) {
    let number = property_get(verse, "verse_number");
    let counts = bible_glyph_verse_glyph_counts(verse);
    let counted = property_get_or_null(counts, glyph);
    let never = null_is(counted);
    let drawn = counted;
    if (never) {
      drawn = 0;
    }
    let seated = property_get_or_null(seated_by_verse, number);
    let missing = null_is(seated);
    if (missing) {
      seated = 0;
    }
    let left = add(seated, drawn);
    let empty = equal(left, 0);
    if (empty) {
      continue;
    }
    let line = {
      verse_number: number,
      seated,
      drawn,
    };
    list_add(lines, line);
  }
  return lines;
}

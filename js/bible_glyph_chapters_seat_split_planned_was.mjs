import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { equal } from "./equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
export async function bible_glyph_chapters_seat_split_planned_was(glyph, was) {
  "$plain glyph";
  "the glyph is the bare picture a chapter page draws too often, spelled as the character table spells it. It names a picture to look for and nothing that runs.";
  "$plain was";
  "the was is the group the table now seats for the words that wore the bare picture when the pages were drawn, spelled as the character table spells it. It names a picture and nothing that runs.";
  "Every verse that draws a bare picture more often than the table now seats it, and whether its bare marks can all be redrawn as the group named as what that picture used to stand for.";
  "IT IS TOLD WHAT THE BARE PICTURE USED TO MEAN, BECAUSE TODAY'S TABLE CANNOT SAY. The plain split planner asks only the table as it stands, so a verse seating both a word that wears the bare picture now and a word that wore it then is undecided there. The history answers it: until 2026-10-03 the bare ear was to hear, akouo and shama, and the ear itself, ous and ozen, and to give ear were not seated as it. A page drawn then drew the ear for hearing, as Isaiah 1:2 shows - its one ear stands where Listen was and give ear is left in words.";
  "A VERSE IS DECIDED ONLY WHEN IT SEATS NO WORD AS THE BARE PICTURE NOW AND SEATS AT LEAST AS MANY UNDRAWN WORDS AS THE OLD MEANING AS IT DRAWS BARE MARKS. Then every bare mark on it was drawn for one of those words, and they are one picture, so order never arises. A verse that also seats the bare picture today mixes the two meanings in one row of marks, and which of its marks was which can be said only by reading it, so it comes back undecided.";
  arguments_assert(arguments, 2);
  let decided = [];
  let undecided = [];
  for (let chapter of bible_glyph_chapters()) {
    let chapter_code = chapter.chapter_code;
    let both = await bible_glyph_chapter_rows_filed(chapter_code);
    let rows_by_verse = {};
    for (let row of both.rows) {
      rows_by_verse[row.verse_number] = row;
    }
    let parsed = bible_glyph_chapter(chapter_code);
    for (let verse of parsed.verses) {
      let verse_number = verse.verse_number;
      let drawn = bible_glyph_verse_glyph_counts(verse);
      let drew = drawn[glyph] ?? 0;
      let row = rows_by_verse[verse_number];
      let words = equal(row, undefined) ? [] : row.words;
      let seated = {};
      for (let word of words) {
        seated[word.glyph] = (seated[word.glyph] ?? 0) + 1;
      }
      let seats = seated[glyph] ?? 0;
      if (less_than_equal(drew, seats)) {
        continue;
      }
      let free = subtract(seated[was] ?? 0, drawn[was] ?? 0);
      if (equal(seats, 0) && less_than_equal(drew, free)) {
        let order = [];
        for (let i = 0; less_than(i, drew); i++) {
          order.push(was);
        }
        decided.push({
          chapter_code,
          verse_number,
          glyph,
          drew,
          order,
        });
        continue;
      }
      undecided.push({
        chapter_code,
        verse_number,
        glyph,
        drew,
        seats,
        free,
      });
    }
  }
  let r = {
    decided,
    undecided,
  };
  return r;
}

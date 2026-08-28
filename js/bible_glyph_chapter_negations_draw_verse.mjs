import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { bible_glyph_word_negation_drawn } from "./bible_glyph_word_negation_drawn.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_glyph_chapter_negations_draw_verse(chapter_code) {
  arguments_assert(arguments, 1);
  let both = await bible_glyph_chapter_rows_filed(chapter_code);
  let rows = both.rows;
  let wanted_by_verse = {};
  for (let row of rows) {
    let wanted = 0;
    for (let word of row.words) {
      let seated = equal(word.glyph, "no_entry");
      if (seated) {
        wanted = add(wanted, 1);
      }
    }
    property_set(wanted_by_verse, row.verse_number, wanted);
  }
  let parsed = bible_glyph_chapter(chapter_code);
  let all = bible_glyph_chapters();
  let raw = null;
  for (let chapter of all) {
    let same = equal(chapter.chapter_code, chapter_code);
    if (same) {
      raw = chapter;
    }
  }
  let planned = [];
  let left = [];
  let verse_at = -1;
  for (let verse of parsed.verses) {
    verse_at = add(verse_at, 1);
    let shorthand = raw.verses[verse_at];
    let wanted = property_get_or_null(wanted_by_verse, verse.verse_number);
    let unknown = null_is(wanted);
    if (unknown) {
      continue;
    }
    let counts = bible_glyph_verse_glyph_counts(verse);
    let already = property_get_or_null(counts, "no_entry");
    let undrawn = null_is(already);
    if (undrawn) {
      already = 0;
    }
    let changes = [];
    let place = 0;
    for (let word of shorthand.words) {
      let drawn = bible_glyph_word_negation_drawn(word);
      let b = null_is(drawn);
      let plain = not(b);
      if (plain) {
        list_add(changes, {
          place,
          word,
          drawn,
        });
      }
      place = add(place, 1);
    }
    let none = list_empty_is(changes);
    if (none) {
      continue;
    }
    let right = list_size(changes);
    let total = add(already, right);
    let agrees = equal(total, wanted);
    if (not(agrees)) {
      list_add(left, {
        verse_number: verse.verse_number,
        wanted,
        already,
        plain: list_size(changes),
      });
      continue;
    }
    list_add(planned, {
      verse_number: verse.verse_number,
      changes,
    });
  }
  let r = {
    planned,
    left,
  };
  return r;
}

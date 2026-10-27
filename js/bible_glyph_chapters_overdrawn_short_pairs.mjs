import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
export async function bible_glyph_chapters_overdrawn_short_pairs(glyphs_comma) {
  "$plain glyphs_comma";
  "the glyphs are the pictures to ask about, joined by commas, spelled as the character table spells them. They name pictures to look for and nothing that runs.";
  "For each named picture a verse draws more often than the table seats it, which pictures that same verse seats more often than it draws them - tallied as pairs, with how many verses had one such picture, several, or none.";
  "IT COUNTS A PICTURE DRAWN NOUGHT TIMES AS SHORT. The underdrawn walk does not, because its gate asks about marks an author drew too few of, and a mark never drawn is plain English there. Joined against that walk, a page drawing the eye where the table now seats the eyes looked like nothing short at all.";
  arguments_assert(arguments, 1);
  let glyphs = text_split_comma(glyphs_comma);
  let pairs = {};
  let kinds = {
    one: 0,
    several: 0,
    none: 0,
  };
  let marks = {
    one: 0,
    several: 0,
    none: 0,
  };
  let samples = [];
  for (let chapter of bible_glyph_chapters()) {
    let chapter_code = chapter.chapter_code;
    let both = await bible_glyph_chapter_rows_filed(chapter_code);
    let seated_by = {};
    for (let row of both.rows) {
      let seated = {};
      for (let word of row.words) {
        if (equal(word.glyph, "")) {
          continue;
        }
        seated[word.glyph] = (seated[word.glyph] ?? 0) + 1;
      }
      seated_by[row.verse_number] = seated;
    }
    for (let verse of bible_glyph_chapter(chapter_code).verses) {
      let drawn = bible_glyph_verse_glyph_counts(verse);
      let seated = seated_by[verse.verse_number] ?? {};
      for (let glyph of glyphs) {
        let extra = subtract(drawn[glyph] ?? 0, seated[glyph] ?? 0);
        if (less_than_equal(extra, 0)) {
          continue;
        }
        function lambda(name) {
          let l = less_than(drawn[name] ?? 0, seated[name]);
          return l;
        }
        let short = object_property_names(seated).filter(lambda);
        let kind = equal(short.length, 0)
          ? "none"
          : equal(short.length, 1)
            ? "one"
            : "several";
        kinds[kind] += 1;
        marks[kind] += extra;
        for (let name of short) {
          let pair = glyph + " -> " + name;
          pairs[pair] = (pairs[pair] ?? 0) + 1;
        }
        if (less_than(samples.length, 12)) {
          samples.push({
            chapter_code,
            verse_number: verse.verse_number,
            glyph,
            extra,
            short,
          });
        }
      }
    }
  }
  function lambda2(a, b) {
    let difference = subtract(b[1], a[1]);
    return difference;
  }
  let top = Object.entries(pairs).sort(lambda2).slice(0, 40);
  let r = {
    kinds,
    marks,
    top,
    samples,
  };
  return r;
}

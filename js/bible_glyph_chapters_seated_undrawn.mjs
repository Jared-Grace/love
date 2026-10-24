import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { file_read } from "./file_read.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { text_trim } from "./text_trim.mjs";
export async function bible_glyph_chapters_seated_undrawn(
  seated_prefix,
  drawn_as,
) {
  arguments_assert(arguments, 2);
  ("$plain seated_prefix");
  ("$plain drawn_as");
  ("the seated prefix and the drawn picture are picture names, the prefix taking in every form built on it. Each names something to look up and nothing that runs.");
  ("Lists every verse of the written picture Bible whose words seat a picture more times than the verse draws it, with the seats spelled out and every bare drawing of the stand-in picture numbered in the verse's own words, so a reader can say which drawing stands for which word.");
  ("IT ONLY READS. It is the reading half of a redraw: when the table moves a word to a new picture and the chapters keep the old one, this is the list a reader works through, and what they decide is filed as data and applied by its own command.");
  let pattern = new RegExp("\\$" + drawn_as + "(?![a-z_+])");
  let verses = [];
  for (let chapter of bible_glyph_chapters()) {
    let chapter_code = chapter.chapter_code;
    let both = await bible_glyph_chapter_rows_filed(chapter_code);
    let parsed = bible_glyph_chapter(chapter_code);
    let lower = text_lower_to(chapter_code);
    let f_path = text_combine_3("js/bible_glyph_chapter_", lower, ".mjs");
    let s = await file_read(f_path);
    let lines = text_split_newline(s);
    for (let row of both.rows) {
      let seats = [];
      let seated = 0;
      for (let word of row.words) {
        let g = String(word.glyph);
        if (g.startsWith(seated_prefix)) {
          seated = seated + 1;
        }
        if (g.startsWith(seated_prefix) || equal(g, drawn_as)) {
          list_add(seats, word.gloss + "=" + g);
        }
      }
      if (equal(seated, 0)) {
        continue;
      }
      function lambda(v) {
        let eq = equal(v.verse_number, row.verse_number);
        return eq;
      }
      let verse = parsed.verses.find(lambda);
      if (equal(verse, undefined)) {
        continue;
      }
      let counts = bible_glyph_verse_glyph_counts(verse);
      let drawn = 0;
      for (let name of object_property_names(counts)) {
        if (name.startsWith(seated_prefix)) {
          drawn = drawn + counts[name];
        }
      }
      if (greater_than_equal(drawn, seated)) {
        continue;
      }
      let opener = "verse_number: " + row.verse_number + ",";
      function lambda2(line) {
        let left = text_trim(line);
        let eq2 = equal(left, opener);
        return eq2;
      }
      let start = lines.findIndex(lambda2);
      let words = [];
      let n = 0;
      let index = start + 2;
      while (
        greater_than_equal(start, 0) &&
        less_than(index, lines.length) &&
        not_equal(text_trim(lines[index]), "],")
      ) {
        let w = text_trim(lines[index]).replace(/^"|",?$/g, "");
        if (pattern.test(w)) {
          n = n + 1;
          w = "[" + n + ":" + w + "]";
        }
        list_add(words, w);
        index = index + 1;
      }
      list_add(verses, {
        chapter_code,
        verse_number: row.verse_number,
        seats: seats.join("; "),
        words: words.join(" "),
      });
    }
  }
  let r = {
    count: verses.length,
    verses,
  };
  return r;
}

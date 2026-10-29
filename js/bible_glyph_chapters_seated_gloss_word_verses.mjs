import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
export async function bible_glyph_chapters_seated_gloss_word_verses(
  glyph,
  words_comma,
) {
  arguments_assert(arguments, 2);
  ("$plain glyph");
  ("one picture, spelled as the character table spells it. It names a picture to look for and nothing that runs.");
  ("$plain words_comma");
  ("English words joined by commas, matched whole and with their capital letters as written. They are words to look for in the interlinear's English and nothing that runs.");
  ("Every verse of the written chapters where a word the table seats as the picture is given one of the words in the interlinear's English, with those words and how often the page draws each picture.");
  ("THE CAPITAL LETTERS ARE KEPT BECAUSE THEY CARRY THE TRANSLATOR'S JUDGMENT. The interlinear writes God for the God of Israel and god or gods for the gods of the nations, both over the one Hebrew elohim, so a search that ignored case would hand back every verse about either and say nothing about which.");
  let wanted = text_split_comma(words_comma);
  function gloss_has(gloss) {
    let parts = gloss.split(/[^A-Za-z]+/);
    function wanted_is(part) {
      let b = wanted.includes(part);
      return b;
    }
    let b = parts.some(wanted_is);
    return b;
  }
  let verses = [];
  for (let chapter of bible_glyph_chapters()) {
    let chapter_code = chapter.chapter_code;
    let both = await bible_glyph_chapter_rows_filed(chapter_code);
    let parsed = bible_glyph_chapter(chapter_code);
    for (let verse of parsed.verses) {
      let verse_number = verse.verse_number;
      function row_is(row) {
        let b = equal(row.verse_number, verse_number);
        return b;
      }
      let row = both.rows.find(row_is);
      if (equal(row, undefined)) {
        continue;
      }
      function match_is(word) {
        let b = equal(word.glyph, glyph) && gloss_has(word.gloss);
        return b;
      }
      let matched = row.words.filter(match_is);
      if (equal(matched.length, 0)) {
        continue;
      }
      function gloss_of(word) {
        let g = word.strong + " " + word.gloss;
        return g;
      }
      list_add(verses, {
        chapter_code,
        verse_number,
        matched: matched.map(gloss_of),
        drawn: bible_glyph_verse_glyph_counts(verse),
      });
    }
  }
  return verses;
}

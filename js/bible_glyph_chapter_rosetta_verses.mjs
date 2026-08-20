import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { bible_glyph_chapter_rosetta_lines } from "./bible_glyph_chapter_rosetta_lines.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { bible_glyph_verse_draw } from "./bible_glyph_verse_draw.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapter_rosetta_verses(chapter_code, traditions) {
  "$plain chapter_code";
  "$plain traditions";
  "the code names one chapter and the traditions are lists of glyph redrawings. Both are data to read and neither runs.";
  "One chapter as Rosetta verses: for each verse its number, the same verse in pictures, in the language it was written in, and word for word in English.";
  "THE THREE BANDS ARE THE WHOLE TEACHING METHOD. Nobody is told what a picture means anywhere on the page. A reader who knows one of the three lines works out the other two from it, the way the Rosetta stone was read - and every reader who does that arrives at the same meanings, because the pictures are keyed to the original word and not to anybody's translation.";
  "The pictures come first of the three on purpose. They are the thing being learned, and the two known bands are underneath as the key rather than above it as a crutch, so a reader who can already read the verse meets the pictures before the answer.";
  "The verse number is what joins the bands, and the bands are built from two different sources - a hand-written chapter and the downloaded interlinear - so a verse the picture chapter has not reached yet simply has no row here. A missing picture is a chapter half written, which is the normal state of this work, and it must not stop the verses that ARE written from being read.";
  let chapter = bible_glyph_chapter(chapter_code);
  let lookup = bible_glyph_characters_lookup(traditions);
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let rows = [];
  for (let verse of chapter.verses) {
    let index = subtract(verse.verse_number, 1);
    let interlinear = list_get_or_null(verses, index);
    let missing = null_is(interlinear);
    if (missing) {
      continue;
    }
    let glyphs = bible_glyph_verse_draw(verse.words, lookup);
    let original = bible_interlinear_verse_original_text(interlinear);
    let english = bible_interlinear_verse_gloss_text(interlinear);
    let row = {
      verse_number: verse.verse_number,
      glyphs,
      original,
      english,
    };
    list_add(rows, row);
  }
  return rows;
}

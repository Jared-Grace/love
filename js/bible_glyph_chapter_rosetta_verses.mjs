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
  "The verse number is what joins the bands, and the bands come from two different places - a hand-written picture chapter and the two known lines written out beside it - so a verse either of them has not reached yet simply has no row here. A half-written chapter is the normal state of this work, and it must not stop the verses that ARE written from being read.";
  "THE TWO KNOWN BANDS ARE READ, NOT BUILT. They were worked out from the interlinear once, at authoring time, and put into a committed function; asking the interlinear here instead would drag a walk over a table of a few hundred megabytes, a downloader and an unzipper into a page that only ever wanted two lines of text - and would then throw, because a browser's store starts empty.";
  "The verse number joins them rather than a place in a list, because the written-out bands hold only the verses the pictures have reached. Counting from the start of either list would silently pair one verse's pictures with another verse's words the moment a chapter was authored out of order.";
  let chapter = bible_glyph_chapter(chapter_code);
  let lookup = bible_glyph_characters_lookup(traditions);
  let lines = bible_glyph_chapter_rosetta_lines(chapter_code);
  let tagalog_verses = bible_glyph_chapter_tagalog_verses(chapter_code);
  let rows = [];
  for (let verse of chapter.verses) {
    let known = list_find_property_or_null(
      lines.verses,
      "verse_number",
      verse.verse_number,
    );
    let missing = null_is(known);
    if (missing) {
      continue;
    }
    let glyphs = bible_glyph_verse_draw(verse.words, lookup);
    let tagalog = bible_glyph_verse_tagalog_text(
      tagalog_verses,
      verse.verse_number,
    );
    let row = {
      verse_number: verse.verse_number,
      glyphs,
      original: known.original,
      english: known.english,
      tagalog,
    };
    list_add(rows, row);
  }
  return rows;
  function bible_glyph_verse_tagalog_text(verses, verse_number) {
    "one verse's plain Tagalog, or empty text where this chapter or this verse has none.";
    let found = list_find_property_or_null(
      verses,
      "verse_number",
      verse_number,
    );
    let none = null_is(found);
    if (none) {
      return "";
    }
    return found.text;
  }
}

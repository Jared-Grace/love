import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { bible_glyph_chapter_rosetta_lines_fetched } from "./bible_glyph_chapter_rosetta_lines_fetched.mjs";
import { bible_glyph_chapter_tagalog_verses_fetched } from "./bible_glyph_chapter_tagalog_verses_fetched.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { null_is } from "./null_is.mjs";
import { bible_glyph_verse_draw } from "./bible_glyph_verse_draw.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapter_rosetta_verses(chapter, traditions) {
  "$plain chapter";
  "$plain traditions";
  "the chapter is one already-read chapter and the traditions are lists of glyph redrawings. Both are data to read and neither runs.";
  "One chapter as Rosetta verses: for each verse its number, the same verse in pictures, in the language it was written in, word for word in English, and in plain Tagalog.";
  "THE BANDS ARE THE WHOLE TEACHING METHOD. Nobody is told what a picture means anywhere on the page. A reader who knows any one of the lines works out the rest from it, the way the Rosetta stone was read - and every reader who does that arrives at the same meanings, because the pictures are keyed to the original word and not to anybody's translation.";
  "A BAND THE READER CANNOT READ COSTS THEM NOTHING, which is why the Tagalog is shown to everybody rather than hidden behind a language setting. The page already prints Hebrew and Greek to people who read neither; a band is not a translation of the page, it is a key somebody else is holding, and the reader simply looks down the stack until they find their own. Adding a picker would make the page ask a question before it could teach anything, and the whole design is that it asks nothing.";
  "IT IS THE TAGALOG BAND THAT MAKES THE CLAIM TESTABLE. The claim is that a stranger with no shared language can follow the marks, and while the only keys were Hebrew, Greek and English the only people who could check the answer were the people who did not need the pictures.";
  "The pictures come first on purpose. They are the thing being learned, and every known band is underneath as a key rather than above it as a crutch, so a reader who can already read the verse meets the pictures before the answer.";
  "THE CHAPTER IS HANDED OVER AND ITS CODE IS READ BACK OFF IT, rather than a code being handed over and the chapter looked up from it. Looking one up means holding all of them, so a page that drew one chapter's key downloaded every chapter to do it; taking the chapter itself leaves the fetching to the caller and asks the chapter for the one thing still needed, which is its own name.";
  "The code is asked of the chapter rather than passed beside it because two arguments that must agree are two arguments that can disagree. A chapter and a code that named a different chapter would pair one chapter's pictures with another chapter's known bands, and every row would look right.";
  "The verse number is what joins the bands, and the bands come from two different places - a hand-written picture chapter and the two known lines written out beside it - so a verse either of them has not reached yet simply has no row here. A half-written chapter is the normal state of this work, and it must not stop the verses that ARE written from being read.";
  "THE BANDS ARE SENT FOR ONE CHAPTER AT A TIME, for the same reason the chapter itself is. The written-out bands for all twenty five are a quarter of a megabyte of source, and they are read only when a reader opens the key - so a page that carried them all charged every reader for a thing most of them never ask to see."; "THE TWO KNOWN BANDS ARE READ, NOT BUILT. They were worked out from the interlinear once, at authoring time, and put into a committed function; asking the interlinear here instead would drag a walk over a table of a few hundred megabytes, a downloader and an unzipper into a page that only ever wanted two lines of text - and would then throw, because a browser's store starts empty.";
  "The verse number joins them rather than a place in a list, because the written-out bands hold only the verses the pictures have reached. Counting from the start of either list would silently pair one verse's pictures with another verse's words the moment a chapter was authored out of order.";
  let chapter_code = chapter.chapter_code;
  let lookup = bible_glyph_characters_lookup(traditions);
  let lines = await bible_glyph_chapter_rosetta_lines_fetched(chapter_code);
  let tagalog_verses = await bible_glyph_chapter_tagalog_verses_fetched(chapter_code);
  let rows = [];
  for (let verse of chapter.verses) {
    let property_name = verse_number_key();
    let known = list_find_property_or_null(
      lines.verses,
      property_name,
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
    let property_name2 = verse_number_key();
    let found = list_find_property_or_null(
      verses,
      property_name2,
      verse_number,
    );
    let none = null_is(found);
    if (none) {
      let r = "";
      return r;
    }
    let r2 = found.text;
    return r2;
  }
}

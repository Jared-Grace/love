import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { bible_glyph_chapter_tagalog_verses_fetched } from "./bible_glyph_chapter_tagalog_verses_fetched.mjs";
import { bible_glyph_verse_draw } from "./bible_glyph_verse_draw.mjs";
import { list_add } from "./list_add.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
export async function bible_glyph_chapter_rosetta_verses(chapter, traditions) {
  "$plain chapter";
  "$plain traditions";
  "the chapter is one already-read chapter and the traditions are lists of glyph redrawings. Both are data to read and neither runs.";
  "One chapter as Rosetta verses: for each verse its number, the same verse in pictures, in the language it was written in, in English, and in plain Tagalog.";
  "THE BANDS ARE THE WHOLE TEACHING METHOD. Nobody is told what a picture means anywhere on the page. A reader who knows any one of the lines works out the rest from it, the way the Rosetta stone was read - and every reader who does that arrives at the same meanings, because the pictures are keyed to the original word and not to anybody's translation.";
  "A BAND THE READER CANNOT READ COSTS THEM NOTHING, which is why the Tagalog is shown to everybody rather than hidden behind a language setting. The page already prints Hebrew and Greek to people who read neither; a band is not a translation of the page, it is a key somebody else is holding, and the reader simply looks down the stack until they find their own. Adding a picker would make the page ask a question before it could teach anything, and the whole design is that it asks nothing.";
  "IT IS THE TAGALOG BAND THAT MAKES THE CLAIM TESTABLE. The claim is that a stranger with no shared language can follow the marks, and while the only keys were Hebrew, Greek and English the only people who could check the answer were the people who did not need the pictures.";
  "The pictures come first on purpose. They are the thing being learned, and every known band is underneath as a key rather than above it as a crutch, so a reader who can already read the verse meets the pictures before the answer.";
  "THE CHAPTER IS HANDED OVER AND ITS CODE IS READ BACK OFF IT, rather than a code being handed over and the chapter looked up from it. Looking one up means holding all of them; taking the chapter itself leaves the fetching to the caller and asks the chapter for the one thing still needed, which is its own name.";
  "THE TWO KNOWN BANDS ARE READ OFF THE CHAPTER ITSELF. A built chapter keeps each verse's whole original line and whole English line beside its words, so the key needs nothing sent for beyond the chapter already on the screen - and the two bands cannot belong to a different verse than the pictures above them, because they arrived in the same verse.";
  "The Tagalog is the one band sent for, one chapter at a time, and a verse it has not reached simply shows none.";
  let chapter_code = chapter.chapter_code;
  let lookup = bible_glyph_characters_lookup(traditions);
  let tagalog_verses =
    await bible_glyph_chapter_tagalog_verses_fetched(chapter_code);
  let rows = [];
  for (let verse of chapter.verses) {
    let glyphs = bible_glyph_verse_draw(verse.words, lookup);
    let tagalog = bible_glyph_verse_tagalog_text(
      tagalog_verses,
      verse.verse_number,
    );
    let row = {
      verse_number: verse.verse_number,
      glyphs,
      original: verse.original,
      english: verse.english,
      tagalog,
    };
    list_add(rows, row);
  }
  return rows;
  function bible_glyph_verse_tagalog_text(verses, verse_number) {
    "one verse's plain Tagalog, or empty text where this chapter or this verse has none.";
    let property_name = verse_number_key();
    let found = list_find_property_or_null(verses, property_name, verse_number);
    let none = null_is(found);
    if (none) {
      let r = "";
      return r;
    }
    let r2 = found.text;
    return r2;
  }
}

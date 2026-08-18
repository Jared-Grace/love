import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { add } from "./add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapter_draft_words(
  chapter_code,
  testament_name,
) {
  "One chapter WORD BY WORD for somebody about to author it: each word's original, its word-for-word English, its root number, and the glyph the root table already seats under that number.";
  "$plain chapter_code";
  "$plain testament_name";
  "AUTHORING A CHAPTER IS NOT CHOOSING PICTURES. The root table decides what a word is drawn as, so that a word drawn one way in one chapter is drawn that way in every chapter, and an author who picked per passage would break the one promise a reader learning the pictures depends on. What the author actually decides is where each word goes in a readable English sentence, and which words are left in English because nothing is seated under them yet.";
  "SO THE TABLE HAS TO BE READABLE BEFORE THE SENTENCE IS WRITTEN, and until now it was not. The draft LINES show the glyphs in order with a mark for every gap, which answers whether a verse carries at all but never which word each picture came from - so an author was left matching pictures back to words by counting, and a miscount seats a glyph on the wrong word with nothing anywhere to catch it.";
  "IT ANSWERS FOR EVERY WORD, drawn or not, because the undrawn ones are half the decision. A word with no glyph is a word the sentence has to carry in English, and seeing which ones those are is what tells an author whether the verse will read as scripture or as pictures strung on nothing.";
  "IT IS AN AID AND NEVER A CHAPTER. Nothing here is scripture and nothing here ships; it is the table an author reads once, in one sitting, and what they write from it is the chapter.";
  let roots = bible_glyph_roots_testament_table(testament_name);
  let drawn = bible_glyph_roots_drawn_lookup(roots);
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let rows = [];
  let verse_number = 0;
  for (let verse of verses) {
    verse_number = add(verse_number, 1);
    let words = [];
    for (let word of verse.words) {
      let seated = property_get_or_null(drawn, word.strong);
      let undrawn = null_is(seated);
      let glyph = "";
      let known = not(undrawn);
      if (known) {
        glyph = seated;
      }
      let entry = {
        original: word.original,
        gloss: word.gloss,
        strong: word.strong,
        glyph,
      };
      list_add(words, entry);
    }
    let row = {
      verse_number,
      words,
    };
    list_add(rows, row);
  }
  return rows;
}

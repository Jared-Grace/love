import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
export async function bible_glyph_chapter_literal_source(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("One chapter's interlinear words cut down to the five things the word-for-word drawing reads: the original, its sound, its parsing, its gloss and its root number.");
  ("THE WORDS ARE STORED AND NOT THE PICTURES, so the page draws them with the table it was built with, and seating a new picture changes every chapter without one being uploaded again.");
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let rows = [];
  for (let verse of verses) {
    let words = [];
    for (let word of verse.words) {
      words.push({
        original: word.original,
        translit: word.translit,
        parsing: word.parsing,
        gloss: word.gloss,
        strong: word.strong,
      });
    }
    rows.push({
      words,
    });
  }
  let source = {
    chapter_code,
    verses: rows,
  };
  return source;
}

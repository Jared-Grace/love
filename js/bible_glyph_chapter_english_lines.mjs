import { bible_interlinear_verse_gloss_text } from "./bible_interlinear_verse_gloss_text.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapter_english_lines(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter to read. It names a stretch of text and nothing that runs.";
  "One chapter as plain English lines, a verse to a line, built from the word-for-word renderings the interlinear already carries.";
  "This is the band a Rosetta reading needs underneath the pictures, and it is the reference an author of pictures reads while choosing them. Both wanted the same thing, so it is built once. What it gives is deliberately the word-for-word rendering rather than a published translation: a translation is somebody's copyright and a word-for-word rendering is the interlinear's own column, so this can be shown to anybody.";
  "It reads CHOPPILY and that is correct here. A Rosetta band exists to show which English word stands under which original word, and a smooth translation has moved the words about until that correspondence is gone - which is exactly the information the band is there to carry.";
  "The verse number is the word's place in the chapter rather than anything the interlinear says, because the interlinear gives the verses in order and gives no number of its own. That holds while the chapter is whole, which every chapter here is.";
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let lines = [];
  let verse_number = 0;
  for (let verse of verses) {
    verse_number = verse_number + 1;
    let joined = bible_interlinear_verse_gloss_text(verse);
    let line = verse_number + " " + joined;
    list_add(lines, line);
  }
  return lines;
}

import { fn_name } from "./fn_name.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { bible_interlinear_verse_gloss_text } from "./bible_interlinear_verse_gloss_text.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapter_english_lines(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter to read. It names a stretch of text and nothing that runs.";
  "One chapter as plain English lines, a verse to a line, built from the English the interlinear already carries.";
  "This is the band a Rosetta reading needs underneath the pictures, and it is the reference an author of pictures reads while choosing them. Both wanted the same thing, so it is built once.";
  ("WHAT COMES OUT IS THE BEREAN WORDING AND IT MAY BE SHOWN TO ANYBODY. It used to say here that this was the interlinear's own word-for-word column rather than a published translation, and that was wrong twice over. The column is headed BSB version and is that translation cut into chunks and hung on the original words, so it was a published translation all along; and it is the Berean, which this repo already publishes as one of its own translations and reads as public domain off the publisher's own licence page. The licence question is answered by ",
    "notes/bible_sources.md",
    " and not by the word interlinear.");
  ("IT READS AS ENGLISH AND THAT IS THE CORRECTION, not a change of taste. The old line read choppily and a paragraph here defended that as showing which English word stood under which original word - but the band is a whole line under a whole line rather than a word standing under a word, so no reader could ever see that correspondence, and the chunks straddle the words they hang on, so in the original's order the line came out as neither language. Genesis 1:3 read said And God Let there be light. The order it is put back into is the one the wording was made for, and ",
    fn_name("bible_interlinear_rows_english_text"),
    " is where that is done.");
  ("The verse number is the word's place in the chapter rather than anything the interlinear says, because the interlinear gives the verses in order and gives no number of its own. That holds while the chapter is whole, which every chapter here is.");
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

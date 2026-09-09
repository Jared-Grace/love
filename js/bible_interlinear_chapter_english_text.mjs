import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { bible_interlinear_verse_gloss_text } from "./bible_interlinear_verse_gloss_text.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
export async function bible_interlinear_chapter_english_text(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code names one chapter to read. It names a stretch of text and nothing that runs.");
  ("One whole chapter of the interlinear's English as a single run of writing, the verses in order with nothing between them but a space.");
  ("THE ENGLISH HERE IS THE BEREAN, AND IT ARRIVED BY A DIFFERENT ROAD FROM THE SHELF. The column is headed BSB version: it is that translation cut into chunks and hung on the original words, published as tables rather than as a marked-up book. So it says the same wording the usfm shelf says, and it is not derived from the shelf - which is the one thing that makes it worth having as plain writing, because a reading can only be checked against a copy of the words that is not the reading itself.");
  ("No verse numbers are put in and no line is broken, because whoever sets two writings of a passage side by side is comparing words, and a number or a line ending belongs to neither printing.");
  ("The verse-by-verse form is next door and is not the same thing. A band under a picture wants a line to a verse; a comparison wants the chapter as one run, because a difference about where one verse ends is not a difference about the words.");
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let texts = [];
  for (let verse of verses) {
    let text = bible_interlinear_verse_gloss_text(verse);
    list_add(texts, text);
  }
  let joined = list_join_space(texts);
  return joined;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { bible_usfm_version_chapter_text } from "./bible_usfm_version_chapter_text.mjs";
import { bible_interlinear_chapter_english_text } from "./bible_interlinear_chapter_english_text.mjs";
import { text_words_plain } from "./text_words_plain.mjs";
import { list_tally_surplus } from "./list_tally_surplus.mjs";
export async function bible_usfm_chapter_interlinear_words_apart(
  book_code,
  chapter_number,
) {
  arguments_assert(arguments, 2);
  ("$plain book_code");
  ("$plain chapter_number");
  ("What one chapter of the Berean read off the usfm shelf says that the interlinear's English does not, and what the interlinear's English says that the reading does not - each as bare words, each word written out as many times as it is over.");
  ("★ IT IS A CHECK AND NOT A COMPARISON OF TWO TRANSLATIONS. Both sides are the Berean Standard Bible. One is the marked-up release this repo lays out into plain writing; the other is the same wording cut into chunks and hung on the original words in the interlinear tables. They were published separately and reach this repo by different roads, so neither is made out of the other - and that is the whole point, because a reading checked against a second run of the same reader is blind to exactly what the reader drops and what it lets through.");
  ("THAT IS WHAT IT WAS BUILT FOR. A line the printing carries as apparatus rather than as scripture - a heading, a book-division subtitle, a note - is words on the shelf side and nothing on the interlinear side, so it stands here as words over. A word of scripture the reader silently loses stands here as words short. Neither is visible to anything that reads the shelf twice.");
  ("THE TWO SIDES DO NOT AGREE PERFECTLY AND ARE NOT MEANT TO. The chunks straddle the words they hang on, and a chunk carrying a joining word may hang it on the neighbour, so a small word can honestly be said once on one side and twice on the other. What a reader looks for here is not an empty answer but a run of words that reads as a sentence of English, because that is what a whole line wrongly let through looks like and a scattering of small words is not.");
  let chapter_code = ebible_chapter_code_pad(book_code, chapter_number);
  let reading = await bible_usfm_version_chapter_text(
    "bsb",
    book_code,
    chapter_number,
  );
  let english = await bible_interlinear_chapter_english_text(chapter_code);
  let reading_words = text_words_plain(reading);
  let english_words = text_words_plain(english);
  let reading_over = list_tally_surplus(reading_words, english_words);
  let english_over = list_tally_surplus(english_words, reading_words);
  let r = {
    chapter_code,
    reading_over,
    english_over,
  };
  return r;
}

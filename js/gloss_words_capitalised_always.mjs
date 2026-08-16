import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
import { gloss_chapters_bible_words_distinct } from "./gloss_chapters_bible_words_distinct.mjs";
import { words_capitalised_always } from "./words_capitalised_always.mjs";
export async function gloss_words_capitalised_always(bible_folder, book_code) {
  "Every word a book writes with a capital and never writes without one, keyed by the word in small letters.";
  "The book is the unit rather than the chapter, because the evidence is the times a word was written in small letters and one chapter may not contain any. Asked of a chapter, a common word that happens to open every sentence it appears in would come back looking exactly like a name.";
  "$plain bible_folder";
  "$plain book_code";
  "both name text to read: a bible this repo holds, and one of its books. Neither names anything that runs.";
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  let words = await gloss_chapters_bible_words_distinct(
    bible_folder,
    chapter_codes,
  );
  let r = words_capitalised_always(words);
  return r;
}

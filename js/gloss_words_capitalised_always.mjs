import { each } from "./each.mjs";
import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
import { equal } from "./equal.mjs";
import { gloss_chapters_bible_words_distinct } from "./gloss_chapters_bible_words_distinct.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export async function gloss_words_capitalised_always(bible_folder, book_code) {
  "Every word a book writes with a capital and never writes without one, keyed by the word in small letters.";
  "This is the one thing the text itself says about which of its words are names. A name is capitalised wherever it stands, while an ordinary word is capitalised only where a sentence begins - so a word that is never once written in small letters through a whole book is a name, and a word written both ways is not.";
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
  let lowered = {};
  function lower_note(word) {
    let lower = text_lower_to(word);
    let same = equal(word, lower);
    if (same) {
      property_set(lowered, word, true);
    }
  }
  each(words, lower_note);
  let r = {};
  function capital_note(word) {
    let lower = text_lower_to(word);
    let seen = property_exists(lowered, lower);
    if (not(seen)) {
      property_set(r, lower, true);
    }
  }
  each(words, capital_note);
  return r;
}

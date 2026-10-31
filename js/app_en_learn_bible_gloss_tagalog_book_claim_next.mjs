import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { app_en_learn_bible_gloss_tagalog_chapters_uploaded } from "./app_en_learn_bible_gloss_tagalog_chapters_uploaded.mjs";
import { app_en_learn_bible_gloss_tagalog_generate } from "./app_en_learn_bible_gloss_tagalog_generate.mjs";
import { gloss_book_claim_next_generic } from "./gloss_book_claim_next_generic.mjs";
export async function app_en_learn_bible_gloss_tagalog_book_claim_next() {
  "The next book of English words explained in Tagalog for one author to work through, in Bible order, marked as theirs so no other author working at the same time is handed it - with the chapters of it still waiting.";
  "Ask this once before starting, instead of choosing by reading the published list: every author reading that list picks the same next chapter. Then write the book's chapters in order; writing the store keeps the book held, so there is no need to ask again until the book is done.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_english();
  let chapter_codes = await ebible_chapter_codes(bible_folder);
  let uploaded = await app_en_learn_bible_gloss_tagalog_chapters_uploaded();
  let fn = app_en_learn_bible_gloss_tagalog_generate;
  let r = await gloss_book_claim_next_generic(chapter_codes, uploaded, fn);
  return r;
}

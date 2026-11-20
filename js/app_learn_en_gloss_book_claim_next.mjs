import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_en_gloss_authored_get } from "./app_learn_en_gloss_authored_get.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { gloss_book_claim_next_generic } from "./gloss_book_claim_next_generic.mjs";
export async function app_learn_en_gloss_book_claim_next(language_code) {
  "The next book of English words explained in the reader's language for one author to work through, in Bible order, marked as theirs so no other author working at the same time is handed it - with the chapters of it still waiting.";
  "Ask this once before starting, instead of choosing by reading the published list: every author reading that list picks the same next chapter. Then write the book's chapters in order; writing the store keeps the book held, so there is no need to ask again until the book is done.";
  "$plain language_code";
  "the code is a language's short name, like tgl or es. It picks an entry from a fixed list and nothing that runs.";
  arguments_assert(arguments, 1);
  let store = app_learn_en_gloss_authored_get(language_code);
  let chapters_uploaded = property_get(store, "chapters_uploaded");
  let fn = property_get(store, "generate");
  let bible_folder = ebible_folder_english();
  let chapter_codes = await ebible_chapter_codes(bible_folder);
  let uploaded = await chapters_uploaded();
  let r = await gloss_book_claim_next_generic(chapter_codes, uploaded, fn);
  return r;
}

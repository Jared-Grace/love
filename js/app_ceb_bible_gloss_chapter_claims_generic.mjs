import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { binisaya_word_root_key_reader } from "./binisaya_word_root_key_reader.mjs";
import { gloss_word_keys_reader_one } from "./gloss_word_keys_reader_one.mjs";
import { app_ceb_bible_gloss_text_index } from "./app_ceb_bible_gloss_text_index.mjs";
import { gloss_chapter_claims_generic } from "./gloss_chapter_claims_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapter_found_counted } from "./gloss_chapter_found_counted.mjs";
export async function app_ceb_bible_gloss_chapter_claims_generic(
  chapter_code,
  lambda_claims,
) {
  "One authored Cebuano chapter opened, its dictionary read, and its explanations asked whatever the caller came to ask - answered with the chapter's name, how many the reading found, and the findings themselves.";
  "$plain chapter_code";
  "the code is a chapter's name, like PRO31, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "Words are matched on their root rather than on their spelling, because the explanations say both kinds of thing - this word stands again in verse fifteen, and this word's root gave the word for food in verse fourteen - and only the root answers both. Matching spellings would call every one of the second kind wrong.";
  "The sweep over every chapter is the same reading with the dictionary opened once instead of once a chapter, so anything learned here holds there.";
  "★ THE DICTIONARY ANSWERS ONE ROOT AND THE READING ASKS FOR EVERY ROOT A WORD COULD HAVE, SO THE ONE ROOT IS HANDED OVER AS A LIST OF ONE. Cebuano is certain where the Bible's own languages are not - a Hebrew shape can belong to two dictionary entries and nothing in the shape says which - so the reading takes a list from every store and this store's list is always one long. Wrapping is what keeps the certainty a fact about this language rather than a shape the whole reading has to bend to.";
  "This wrapping was missed here when the reading changed, and the sweep beside it was not, which is exactly why it went unseen: the gate runs the sweep. A one-root reader handed to a reading that wants a list answers with a word where a list was wanted, and a word walked as a list gives up its letters one at a time - so every verse would have been keyed by letters and every claim settled by whether two words share a letter. Nothing would have thrown.";
  let known = await binisaya_words_known();
  let word_key_read = binisaya_word_root_key_reader(known);
  let word_keys_read = gloss_word_keys_reader_one(word_key_read);
  let text_index = app_ceb_bible_gloss_text_index();
  let found = await gloss_chapter_claims_generic(
    chapter_code,
    app_ceb_bible_gloss_generate,
    text_index,
    word_keys_read,
    lambda_claims,
  );
  let r = gloss_chapter_found_counted(chapter_code, found);
  return r;
}

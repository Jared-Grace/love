import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_passage_words_originals } from "./gloss_passage_words_originals.mjs";
import { gloss_chapter_words_respell } from "./gloss_chapter_words_respell.mjs";
export async function app_original_bible_gloss_words_respell(chapter_code) {
  "Give every explanation in one original-language gloss chapter the passage's own spelling of the word it is about.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN05, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "This store explains the original language, so the spelling that wins is the passage's own original word, which is also the one the misalignment reading compares against.";
  "It is the twin of the Cebuano one, and it exists because an author typing Greek or Hebrew by hand copies a word that looks right and is spelt with different letters underneath - an accent written as its own mark rather than baked into the vowel. The two read the same on any screen and compare as different, so the fault is invisible in exactly the place a person would look for it.";
  let fn = app_original_bible_gloss_generate;
  let words_read = gloss_passage_words_originals;
  let r = await gloss_chapter_words_respell(chapter_code, fn, words_read);
  return r;
}

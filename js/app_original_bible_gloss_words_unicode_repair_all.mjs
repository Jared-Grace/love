import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_passage_words_originals } from "./gloss_passage_words_originals.mjs";
import { gloss_chapters_words_unicode_repair } from "./gloss_chapters_words_unicode_repair.mjs";
export async function app_original_bible_gloss_words_unicode_repair_all() {
  "Put back, across every authored chapter of the original-language gloss, the exact letters each passage's Greek or Hebrew is written with, wherever an explanation names the same word in a different spelling of the same letters.";
  "This is the one command the gate over the same store is answered by, so what a reader of that failure types is a single thing that finds its own set rather than a list of chapter names they would have to copy out of the complaint.";
  "This store glosses the original language itself, so the letters put back are the passage's own original-language wording rather than any translation beside it - which is also where the drift happens, since those are the alphabets whose accented letters have more than one spelling.";
  let fn = app_original_bible_gloss_generate;
  let words_read = gloss_passage_words_originals;
  let r = await gloss_chapters_words_unicode_repair(fn, words_read);
  return r;
}

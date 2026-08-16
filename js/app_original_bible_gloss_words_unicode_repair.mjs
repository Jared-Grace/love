import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_chapter_words_unicode_repair } from "./gloss_chapter_words_unicode_repair.mjs";
import { gloss_passage_words_originals } from "./gloss_passage_words_originals.mjs";
export async function app_original_bible_gloss_words_unicode_repair(
  chapter_code,
) {
  "Put back, across one authored chapter of the original-language gloss, the exact letters each passage's Greek or Hebrew is written with, wherever an explanation names the same word in a different spelling of the same letters.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "This store glosses the original language itself, so the letters put back are the passage's own original-language wording rather than any translation beside it - which is also where the drift happens, since those are the alphabets whose accented letters have more than one spelling.";
  let fn = app_original_bible_gloss_generate;
  let words_read = gloss_passage_words_originals;
  let r = await gloss_chapter_words_unicode_repair(
    chapter_code,
    fn,
    words_read,
  );
  return r;
}

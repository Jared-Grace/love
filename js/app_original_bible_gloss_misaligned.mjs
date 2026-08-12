import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_chapter_words_misaligned } from "./gloss_chapter_words_misaligned.mjs";
export async function app_original_bible_gloss_misaligned(chapter_code) {
  "Every passage of one original-language gloss chapter whose word explanations have stopped lining up with the passage itself.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  let fn = app_original_bible_gloss_generate;
  let r = await gloss_chapter_words_misaligned(chapter_code, fn);
  return r;
}

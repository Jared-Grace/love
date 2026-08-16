import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapter_passage_entries } from "./gloss_chapter_passage_entries.mjs";
export async function app_ceb_bible_gloss_passage_entries(
  chapter_code,
  verse_key,
) {
  "The word explanations already stored for one passage of the Cebuano gloss, or nothing where that passage has not been written yet.";
  "Every chapter in this store was generated rather than authored, so reading a passage back is the ordinary first step of the work rather than a rare repair.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  let fn = app_ceb_bible_gloss_generate;
  let entries = await gloss_chapter_passage_entries(chapter_code, verse_key, fn);
  return entries;
}

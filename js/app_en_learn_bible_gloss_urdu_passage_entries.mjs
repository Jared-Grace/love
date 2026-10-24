import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_chapter_passage_entries } from "./gloss_chapter_passage_entries.mjs";
export async function app_en_learn_bible_gloss_urdu_passage_entries(
  chapter_code,
  verse_key,
) {
  "The word explanations already stored for one passage of the English words explained in Urdu, or nothing where that passage has not been written yet.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let entries = await gloss_chapter_passage_entries(
    chapter_code,
    verse_key,
    fn,
  );
  return entries;
}

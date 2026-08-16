import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_chapter_passage_entries } from "./gloss_chapter_passage_entries.mjs";
export async function app_original_bible_gloss_passage_entries(
  chapter_code,
  verse_key,
) {
  "The word explanations already stored for one passage of the original-language gloss, or nothing where that passage has not been written yet.";
  "Saving a passage writes all of its explanations at once, so mending a single wording means handing back every other one unchanged. Reading them first is what makes that possible without retyping a passage, which is the one way a mend can quietly damage what it was not about.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  let fn = app_original_bible_gloss_generate;
  let entries = await gloss_chapter_passage_entries(
    chapter_code,
    verse_key,
    fn,
  );
  return entries;
}

import { gloss_write_files_stale_generic } from "./gloss_write_files_stale_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_write_files_stale(
  chapter_code,
) {
  "The passages of one chapter of the store that teaches English to an Urdu reader whose authored word explanations are in their hand-off file and not in the store.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to look for and nothing that runs.";
  "It only reads. What it answers is the list the repair beside it would write, so it can be asked about a chapter somebody else is reading without taking anything away from them.";
  let r = await gloss_write_files_stale_generic(
    chapter_code,
    app_en_learn_bible_gloss_urdu_generate,
  );
  return r;
}

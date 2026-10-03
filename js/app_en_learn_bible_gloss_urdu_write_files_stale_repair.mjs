import { gloss_write_files_stale_repair_generic } from "./gloss_write_files_stale_repair_generic.mjs";
import { app_en_learn_bible_gloss_urdu_passages } from "./app_en_learn_bible_gloss_urdu_passages.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_write_files_stale_repair(
  chapter_code,
) {
  "Store every passage of one chapter of the store that teaches English to an Urdu reader whose authored word explanations are in their hand-off file and not in the store.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to read and nothing that runs.";
  "What it does is the same whatever chapter it is asked for: it finds its own list, writes the author's file over the store where the two differ, and asks again.";
  let r = await gloss_write_files_stale_repair_generic(
    chapter_code,
    app_en_learn_bible_gloss_urdu_passages,
    app_en_learn_bible_gloss_urdu_generate,
  );
  return r;
}

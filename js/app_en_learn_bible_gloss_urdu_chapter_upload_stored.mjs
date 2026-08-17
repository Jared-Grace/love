import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_generate_upload_path } from "./app_en_learn_bible_gloss_urdu_generate_upload_path.mjs";
import { g_generate_upload_filter } from "./g_generate_upload_filter.mjs";
export async function app_en_learn_bible_gloss_urdu_chapter_upload_stored(
  chapter_code,
) {
  "Publish one chapter of English words explained in Urdu exactly as it already stands, generating nothing.";
  "The explanations here are written by hand rather than asked of a model, so publishing and writing are separate steps on purpose: this one only carries up what is already in the store, and it cannot overwrite an authored chapter with a generated one.";
  "A chapter is published part-written on purpose. The store holds only the verses somebody has explained, so a reader on a verse nobody has reached yet is shown the passage and no explanations, rather than an explanation nobody wrote.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to publish and nothing that runs.";
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let path_get = app_en_learn_bible_gloss_urdu_generate_upload_path;
  await g_generate_upload_filter(fn, path_get, chapter_code);
}

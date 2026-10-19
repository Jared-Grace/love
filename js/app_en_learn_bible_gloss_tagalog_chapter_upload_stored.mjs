import { app_en_learn_bible_gloss_tagalog_generate } from "./app_en_learn_bible_gloss_tagalog_generate.mjs";
import { app_en_learn_bible_gloss_tagalog_generate_upload_path } from "./app_en_learn_bible_gloss_tagalog_generate_upload_path.mjs";
import { g_generate_upload_filter } from "./g_generate_upload_filter.mjs";
export async function app_en_learn_bible_gloss_tagalog_chapter_upload_stored(
  chapter_code,
) {
  "Publish one chapter of English words explained in Tagalog exactly as it already stands, generating nothing.";
  "The explanations are written by hand rather than asked of a model, so publishing and writing are separate steps on purpose: this one only carries up what is already in the store.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to publish and nothing that runs.";
  let fn = app_en_learn_bible_gloss_tagalog_generate;
  let path_get = app_en_learn_bible_gloss_tagalog_generate_upload_path;
  await g_generate_upload_filter(fn, path_get, chapter_code);
}

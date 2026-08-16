import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_generate_upload_path } from "./app_ceb_bible_gloss_generate_upload_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_generate_upload_filter } from "./g_generate_upload_filter.mjs";
export async function app_ceb_bible_gloss_chapter_upload_stored(chapter_code) {
  "Publish one chapter of the Cebuano gloss store exactly as it already stands, generating nothing.";
  ("It exists because ",
    fn_name("app_ceb_bible_gloss_generate_chapter_upload"),
    " writes before it publishes: it asks a model for the chapter's explanations first and uploads second. That first half now refuses, so reaching for it to publish an authored chapter fails before it ever gets to the publishing - and before it refused, it would have quietly replaced the authored explanations with generated ones.");
  ("A chapter is published part-written on purpose. The store holds only the passages that have been authored, so a reader on a verse nobody has explained yet is shown the chapter and no explanations, rather than an explanation nobody wrote.");
  ("$plain chapter_code");
  ("the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to publish and nothing that runs.");
  let fn = app_ceb_bible_gloss_generate;
  let path_get = app_ceb_bible_gloss_generate_upload_path;
  await g_generate_upload_filter(fn, path_get, chapter_code);
}

import { g_generate_upload_filter } from "./g_generate_upload_filter.mjs";
import { app_ceb_bible_gloss_generate_upload_path } from "./app_ceb_bible_gloss_generate_upload_path.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_generate_chapter } from "./app_ceb_bible_gloss_generate_chapter.mjs";
export async function app_ceb_bible_gloss_generate_chapter_upload(
  chapter_code_specified,
) {
  await app_ceb_bible_gloss_generate_chapter(chapter_code_specified);
  let fn = app_ceb_bible_gloss_generate;
  let path_get = app_ceb_bible_gloss_generate_upload_path;
  await g_generate_upload_filter(fn, path_get, chapter_code_specified);
}

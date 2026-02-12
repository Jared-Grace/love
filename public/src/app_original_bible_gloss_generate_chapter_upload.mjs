import { app_original_bible_gloss_generate_upload_path } from "../../../love/public/src/app_original_bible_gloss_generate_upload_path.mjs";
import { app_original_bible_gloss_generate_chapter } from "../../../love/public/src/app_original_bible_gloss_generate_chapter.mjs";
import { g_generate_upload_filter } from "../../../love/public/src/g_generate_upload_filter.mjs";
export async function app_original_bible_gloss_generate_chapter_upload(
  chapter_code_specified,
) {
  "  await app_original_bible_gloss_generate_chapter(chapter_code_specified);";
  let fn = app_original_bible_gloss_generate_chapter;
  let path_get = app_original_bible_gloss_generate_upload_path;
  await g_generate_upload_filter(fn, path_get, chapter_code_specified);
}

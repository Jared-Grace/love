import { app_original_bible_gloss_generate_upload_path } from "../../../love/public/src/app_original_bible_gloss_generate_upload_path.mjs";
import { app_original_bible_gloss_generate } from "../../../love/public/src/app_original_bible_gloss_generate.mjs";
import { g_generate_upload_generic } from "../../../love/public/src/g_generate_upload_generic.mjs";
export async function app_original_bible_gloss_generate_upload() {
  let fn = app_original_bible_gloss_generate;
  let path_get = app_original_bible_gloss_generate_upload_path;
  await g_generate_upload_generic(fn, path_get);
}

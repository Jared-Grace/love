import { app_ceb_bible_gloss_generate_upload_path } from "../../../love/public/src/app_ceb_bible_gloss_generate_upload_path.mjs";
import { app_ceb_bible_gloss_generate } from "../../../love/public/src/app_ceb_bible_gloss_generate.mjs";
import { g_generate_upload_generic } from "../../../love/public/src/g_generate_upload_generic.mjs";
export async function app_ceb_bible_gloss_generate_upload() {
  let path_get = app_ceb_bible_gloss_generate_upload_path;
  let fn = app_ceb_bible_gloss_generate;
  await g_generate_upload_generic(path_get, fn);
}

import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_generate_upload_path } from "./app_original_bible_gloss_generate_upload_path.mjs";
import { g_generate_upload_generic } from "./g_generate_upload_generic.mjs";
export async function app_original_bible_gloss_generate_upload() {
  "the generator is named here rather than the chapter-at-a-time caller of it, because this name is read as a folder on disk and the files are written under the generator's. the chapter caller has a folder of its own only because it used to be the one named here, and one stale file still sits in it - which is why the mistake was invisible: the upload found something every time, just never anything new.";
  let fn = app_original_bible_gloss_generate;
  let path_get = app_original_bible_gloss_generate_upload_path;
  await g_generate_upload_generic(fn, path_get);
}

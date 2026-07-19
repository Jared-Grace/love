import { app_original_bible_gloss_generate_download } from "./app_original_bible_gloss_generate_download.mjs";
import { app_shared_gloss_bible_home_generic } from "./app_shared_gloss_bible_home_generic.mjs";
export async function app_original_bible_home(context) {
  let download = app_original_bible_gloss_generate_download;
  await app_shared_gloss_bible_home_generic(context, download, false);
}

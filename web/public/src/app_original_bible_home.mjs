import { app_original_bible_gloss_generate_download } from "../../../love/public/src/app_original_bible_gloss_generate_download.mjs";
import { app_ceb_bible_home_generic } from "../../../love/public/src/app_ceb_bible_home_generic.mjs";
export async function app_original_bible_home() {
  let download = app_original_bible_gloss_generate_download;
  const language = "ceb";
  await app_ceb_bible_home_generic(context, download, language);
}

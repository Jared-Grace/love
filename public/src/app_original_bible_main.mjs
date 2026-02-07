import { app_ceb_bible_main_generic } from "../../../love/public/src/app_ceb_bible_main_generic.mjs";
import { app_ceb_bible_home } from "../../../love/public/src/app_ceb_bible_home.mjs";
import { app_ceb_bible_screens } from "../../../love/public/src/app_ceb_bible_screens.mjs";
import { app_ceb_bible } from "../../../love/public/src/app_ceb_bible.mjs";
import { app_ceb_bible_home_generic } from "../../../love/public/src/app_ceb_bible_home_generic.mjs";
import { app_ceb_bible_gloss_generate_download } from "../../../love/public/src/app_ceb_bible_gloss_generate_download.mjs";
export async function app_original_bible_main(context) {
  let app_fn = app_ceb_bible;
  let screens = app_ceb_bible_screens();
  let screen_home = app_ceb_bible_home;
  app_ceb_bible_main_generic(context, app_fn, screens, screen_home);
  return;
  let download = app_ceb_bible_gloss_generate_download;
  const language = "ceb";
  await app_ceb_bible_home_generic(context, download, language);
}

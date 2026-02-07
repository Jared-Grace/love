import { app_ceb_bible_main_generic } from "../../../love/public/src/app_ceb_bible_main_generic.mjs";
import { app_ceb_bible_home } from "../../../love/public/src/app_ceb_bible_home.mjs";
import { app_ceb_bible_screens } from "../../../love/public/src/app_ceb_bible_screens.mjs";
import { app_ceb_bible } from "../../../love/public/src/app_ceb_bible.mjs";
export async function app_original_bible_main(context) {
  let app_fn = app_ceb_bible;
  let screens = app_ceb_bible_screens();
  let screen_home = app_ceb_bible_home;
  app_ceb_bible_main_generic(context, app_fn, screens, screen_home);
}

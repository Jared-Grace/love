import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
import { app_ceb_bible_screens } from "../../../love/public/src/app_ceb_bible_screens.mjs";
import { app_ceb_bible_home } from "../../../love/public/src/app_ceb_bible_home.mjs";
import { app_ceb_bible } from "../../../love/public/src/app_ceb_bible.mjs";
import { app_bible_main_generic_before } from "../../../love/public/src/app_bible_main_generic_before.mjs";
export function app_ceb_bible_main(context) {
  let app_fn = app_ceb_bible;
  let screens = app_ceb_bible_screens();
  let screen_home = app_ceb_bible_home;
  app_bible_main_generic_before(context, app_fn, screens, app_ceb_bible_home);
  app_generic_refresh(context);
}

import { app_g_bible_home } from "../../../love/public/src/app_g_bible_home.mjs";
import { app_bible_main_generic_before } from "../../../love/public/src/app_bible_main_generic_before.mjs";
import { app_g_bible_screens } from "../../../love/public/src/app_g_bible_screens.mjs";
import { app_g_bible } from "../../../love/public/src/app_g_bible.mjs";
export function app_ceb_bible_main() {
  let app_fn = app_g_bible;
  let screens = app_g_bible_screens();
  app_bible_main_generic_before(context, app_fn, screens, app_g_bible_home);
}

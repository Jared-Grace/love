import { app_bible_shared_initialize } from "./app_bible_shared_initialize.mjs";
import { app_ceb_bible_screens } from "./app_ceb_bible_screens.mjs";
import { app_ceb_bible_home } from "./app_ceb_bible_home.mjs";
import { app_ceb_bible } from "./app_ceb_bible.mjs";
export async function app_ceb_bible_main(context) {
  let app_fn = app_ceb_bible;
  let screens = app_ceb_bible_screens();
  let screen_home = app_ceb_bible_home;
  await app_bible_shared_initialize(context, app_fn, screens, screen_home);
}

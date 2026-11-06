import { app_learn_ceb_screens } from "./app_learn_ceb_screens.mjs";
import { app_learn_ceb_home } from "./app_learn_ceb_home.mjs";
import { app_learn_ceb_gloss_chapters_uploaded } from "./app_learn_ceb_gloss_chapters_uploaded.mjs";
import { app_shared_bible_chapters_offered_key } from "./app_shared_bible_chapters_offered_key.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_bible_initialize } from "./app_shared_bible_initialize.mjs";
export async function app_ceb_bible(context) {
  let app_fn = app_ceb_bible;
  let screens = app_learn_ceb_screens();
  let screen_home = app_learn_ceb_home;
  let chapters_ask = app_learn_ceb_gloss_chapters_uploaded;
  let key_chapters = app_shared_bible_chapters_offered_key();
  property_set(context, key_chapters, chapters_ask);
  await app_shared_bible_initialize(context, app_fn, screens, screen_home);
}

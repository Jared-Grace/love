import { app_bible_home } from "../../../love/public/src/app_bible_home.mjs";
import { app_bible_shared_initialize } from "../../../love/public/src/app_bible_shared_initialize.mjs";
import { app_bible } from "../../../love/public/src/app_bible.mjs";
import { app_bible_screens } from "../../../love/public/src/app_bible_screens.mjs";
export async function app_bible_main(context) {
  let app_fn = app_bible;
  let screens = app_bible_screens();
  await app_bible_shared_initialize(context, app_bible_home, screens, app_fn);
}

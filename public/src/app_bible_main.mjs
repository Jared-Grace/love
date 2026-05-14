import { app_shared_refresh } from "../../../love/public/src/app_shared_refresh.mjs";
import { app_bible_home } from "../../../love/public/src/app_bible_home.mjs";
import { app_bible_main_generic_before } from "../../../love/public/src/app_bible_main_generic_before.mjs";
import { app_bible } from "../../../love/public/src/app_bible.mjs";
import { app_bible_screens } from "../../../love/public/src/app_bible_screens.mjs";
export async function app_bible_main(context) {
  let app_fn = app_bible;
  let screens = app_bible_screens();
  await app_bible_main_generic_before(context, app_fn, screens, app_bible_home);
  await app_shared_refresh(context);
}

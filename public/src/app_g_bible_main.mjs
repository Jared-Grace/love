import { firebase_login } from "../../../love/public/src/firebase_login.mjs";
import { app_g_bible_screens } from "../../../love/public/src/app_g_bible_screens.mjs";
import { app_g_bible } from "../../../love/public/src/app_g_bible.mjs";
import { app_bible_main_generic } from "../../../love/public/src/app_bible_main_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_g_bible_main(context) {
  marker("1");
  await firebase_login(on_logged_in, on_logged_out);
  let app_fn = app_g_bible;
  let screens = app_g_bible_screens();
  app_bible_main_generic(context, app_fn, screens);
}

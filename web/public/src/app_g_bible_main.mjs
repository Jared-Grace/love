import { app_g_bible_home } from "../../../love/public/src/app_g_bible_home.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
import { app_bible_main_generic_before } from "../../../love/public/src/app_bible_main_generic_before.mjs";
import { firebase_login } from "../../../love/public/src/firebase_login.mjs";
import { app_g_bible_screens } from "../../../love/public/src/app_g_bible_screens.mjs";
import { app_g_bible } from "../../../love/public/src/app_g_bible.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_g_bible_main(context) {
  let app_fn = app_g_bible;
  let screens = app_g_bible_screens();
  app_bible_main_generic_before(context, app_fn, screens, app_g_bible_home);
  marker("1");
  function lambda() {
    app_generic_refresh(context);
  }
  await firebase_login(context, lambda);
}

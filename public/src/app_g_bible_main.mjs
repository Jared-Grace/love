import { app_bible_shared_initialize_before } from "../../../love/public/src/app_bible_shared_initialize_before.mjs";
import { app_g_bible_home } from "../../../love/public/src/app_g_bible_home.mjs";
import { app_shared_refresh } from "../../../love/public/src/app_shared_refresh.mjs";
import { firebase_login } from "../../../love/public/src/firebase_login.mjs";
import { app_g_bible_screens } from "../../../love/public/src/app_g_bible_screens.mjs";
import { app_g_bible } from "../../../love/public/src/app_g_bible.mjs";
export async function app_g_bible_main(context) {
  let app_fn = app_g_bible;
  let screens = app_g_bible_screens();
  app_bible_shared_initialize_before(
    context,
    app_g_bible_home,
    app_fn,
    screens,
  );
  async function lambda() {
    await app_shared_refresh(context);
  }
  await firebase_login(context, lambda);
}

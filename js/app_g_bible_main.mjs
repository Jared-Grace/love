import { app_bible_shared_initialize_before } from "./app_bible_shared_initialize_before.mjs";
import { app_g_bible_home } from "./app_g_bible_home.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
import { firebase_login } from "./firebase_login.mjs";
import { app_g_bible_screens } from "./app_g_bible_screens.mjs";
import { app_g_bible } from "./app_g_bible.mjs";
export async function app_g_bible_main(context) {
  let app_fn = app_g_bible;
  let screens = app_g_bible_screens();
  app_bible_shared_initialize_before(
    context,
    app_fn,
    screens,
    app_g_bible_home,
  );
  async function lambda() {
    await app_shared_refresh(context);
  }
  await firebase_login(context, lambda);
}

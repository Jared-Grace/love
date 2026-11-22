import { app_g_bible_screens } from "./app_g_bible_screens.mjs";
import { app_shared_bible_passages_download_key } from "./app_shared_bible_passages_download_key.mjs";
import { property_set } from "./property_set.mjs";
import { g_sermon_generate_download } from "./g_sermon_generate_download.mjs";
import { app_shared_bible_initialize_before } from "./app_shared_bible_initialize_before.mjs";
import { app_g_bible_home } from "./app_g_bible_home.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
import { firebase_login } from "./firebase_login.mjs";
export async function app_g_bible(context) {
  let app_fn = app_g_bible;
  let screens = app_g_bible_screens();
  let key_passages = app_shared_bible_passages_download_key();
  property_set(context, key_passages, g_sermon_generate_download);
  app_shared_bible_initialize_before(
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

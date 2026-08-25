import { app_shared_bible_screen_open } from "./app_shared_bible_screen_open.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_shared_bible_settings } from "./app_shared_bible_settings.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_bible_history_hash_set } from "./app_shared_bible_history_hash_set.mjs";
import { app_shared_bible_screen_home_set } from "./app_shared_bible_screen_home_set.mjs";
import { app_shared_bible_history_fill } from "./app_shared_bible_history_fill.mjs";
export async function app_shared_bible_history(context) {
  "the readings this app has been left on, as its own screen reached from settings; back returns to the settings hub";
  "picking one points the link at that passage and then hands the reader their home screen, which is the reader this app opens with and the one that will draw what the link now says";
  async function lambda_back() {
    await app_shared_screen_set(context, app_shared_bible_settings);
  }
  let root = app_shared_bible_screen_open(context, lambda_back);
  let container = html_div(root);
  async function open_entry(entry) {
    app_shared_bible_history_hash_set(entry);
    await app_shared_bible_screen_home_set(context);
  }
  await app_shared_bible_history_fill(container, context, open_entry);
}

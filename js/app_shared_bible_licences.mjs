import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_shared_bible_settings } from "./app_shared_bible_settings.mjs";
import { app_shared_bible_screen_open } from "./app_shared_bible_screen_open.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_bible_licences_fill } from "./app_shared_bible_licences_fill.mjs";
export async function app_shared_bible_licences(context) {
  "who each bible in this app belongs to and on what terms, as its own screen reached from settings; back returns to the settings hub";
  async function lambda_back() {
    await app_shared_screen_set(context, app_shared_bible_settings);
  }
  let root = app_shared_bible_screen_open(context, lambda_back);
  let container = html_div(root);
  await app_shared_bible_licences_fill(container);
}

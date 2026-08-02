import { app_shared_bible_screen_open } from "./app_shared_bible_screen_open.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_bible_settings } from "./app_bible_settings.mjs";
import { app_shared_bible_languages_chosen_get } from "./app_shared_bible_languages_chosen_get.mjs";
import { app_shared_bible_offline_body } from "./app_shared_bible_offline_body.mjs";
export function app_bible_offline(context) {
  "the offline downloads as their own screen, reached from settings; back returns to the settings hub";
  async function lambda_back() {
    await app_shared_screen_set(context, app_bible_settings);
  }
  let root = app_shared_bible_screen_open(context, lambda_back);
  let languages = app_shared_bible_languages_chosen_get();
  let container = html_div(root);
  app_shared_bible_offline_body(container, languages);
}

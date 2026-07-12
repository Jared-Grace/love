import { app_reply_buttons_languages_on_toggle } from "./app_reply_buttons_languages_on_toggle.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_bible_home } from "./app_bible_home.mjs";
import { app_bible_languages_chosen_get } from "./app_bible_languages_chosen_get.mjs";
export function app_bible_languages(context) {
  let root = html_clear_context(context);
  function lambda_back() {
    app_shared_screen_set(context, app_bible_home);
  }
  app_shared_button_back(root, lambda_back);
  let languages = ebible_languages();
  let key = "languages_chosen";
  let languages_chosen = app_bible_languages_chosen_get(context);
  function lambda() {
    storage_local_set_context(context, key, languages_chosen);
  }
  app_reply_buttons_languages_on_toggle(
    languages_chosen,
    lambda,
    root,
    languages,
  );
}

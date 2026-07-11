import { app_reply_buttons_languages_on_toggle } from "../../../love/public/src/app_reply_buttons_languages_on_toggle.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { ebible_language_english } from "../../../love/public/src/ebible_language_english.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { storage_local_exists_not_context } from "../../../love/public/src/storage_local_exists_not_context.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { app_shared_button_back } from "../../../love/public/src/app_shared_button_back.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { app_bible_home } from "../../../love/public/src/app_bible_home.mjs";
export function app_bible_languages(context) {
  let root = html_clear_context(context);
  function lambda_back() {
    app_shared_screen_set(context, app_bible_home);
  }
  app_shared_button_back(root, lambda_back);
  let languages = ebible_languages();
  let key = "languages_chosen";
  let n = storage_local_exists_not_context(context, key);
  if (n) {
    let en_l = ebible_language_english();
    let languages_chosen_default = [en_l];
    storage_local_set_context(context, key, languages_chosen_default);
  }
  let languages_chosen = storage_local_get_context(context, key);
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

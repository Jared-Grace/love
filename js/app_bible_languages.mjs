import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { app_replace_button_back } from "./app_replace_button_back.mjs";
import { app_shared_screen_set_home } from "./app_shared_screen_set_home.mjs";
import { app_bible_languages_chosen_get } from "./app_bible_languages_chosen_get.mjs";
import { html_subset_ordered_choose } from "./html_subset_ordered_choose.mjs";
export function app_bible_languages(context) {
  let root = html_clear_context(context);
  function lambda_back() {
    app_shared_screen_set_home(context);
  }
  app_replace_button_back(root, lambda_back);
  let languages = ebible_languages();
  let key = "languages_chosen";
  let languages_chosen = app_bible_languages_chosen_get(context);
  function on_change() {
    storage_local_set_context(context, key, languages_chosen);
  }
  html_subset_ordered_choose(
    root,
    languages,
    languages_chosen,
    "name",
    "language_code",
    on_change,
    "Languages",
    "Order shown in verses",
  );
}

import { app_shared_bible_languages_hash_value } from "./app_shared_bible_languages_hash_value.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { app_shared_bible_languages_offered } from "./app_shared_bible_languages_offered.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
import { app_shared_bible_languages_chosen_get } from "./app_shared_bible_languages_chosen_get.mjs";
import { app_shared_bible_subset_screen_generic } from "./app_shared_bible_subset_screen_generic.mjs";
import { app_shared_languages_prompt_text } from "./app_shared_languages_prompt_text.mjs";
import { app_shared_screen_later } from "./app_shared_screen_later.mjs";
import { app_shared_bible_settings } from "./app_shared_bible_settings.mjs";
export function app_shared_bible_languages(context) {
  "the choices are the ones this app can serve a reader in, which for most of them is every translation there is";
  let languages = app_shared_bible_languages_offered(context);
  let languages_chosen = app_shared_bible_languages_chosen_get();
  function on_change() {
    "write the chosen languages back to the url hash (key l) so the choice is shareable, survives a reload, and matches the chapter reader";
    let l = app_shared_bible_languages_hash_value(languages_chosen);
    let property_name = app_shared_bible_language_hash_key();
    html_hash_property_set(property_name, l);
  }
  ("reached from the settings hub, so back returns there");
  let back = app_shared_screen_later(context, app_shared_bible_settings);
  let choices_label = app_shared_languages_prompt_text();
  app_shared_bible_subset_screen_generic({
    context,
    options: languages,
    chosen: languages_chosen,
    name_property: "name",
    key_property: language_code_key(),
    on_change,
    choices_label,
    back,
  });
}

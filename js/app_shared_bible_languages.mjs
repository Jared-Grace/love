import { language_code_key } from "./language_code_key.mjs";
import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { app_shared_bible_languages_offered } from "./app_shared_bible_languages_offered.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
import { app_shared_bible_languages_chosen_get } from "./app_shared_bible_languages_chosen_get.mjs";
import { app_shared_bible_subset_screen_generic } from "./app_shared_bible_subset_screen_generic.mjs";
import { app_shared_languages_prompt_text } from "./app_shared_languages_prompt_text.mjs";
import { app_shared_screen_later } from "./app_shared_screen_later.mjs";
import { app_shared_bible_settings } from "./app_shared_bible_settings.mjs";
export function app_shared_bible_languages(context) {
  ("the choices are the ones this app can serve a reader in, which for most of them is every translation there is");
  let languages = app_shared_bible_languages_offered(context);
  let languages_chosen = app_shared_bible_languages_chosen_get();
  function on_change() {
    "write the chosen languages back to the url hash (key l) so the choice is shareable, survives a reload, and matches the chapter reader";
    let codes = list_map_property(languages_chosen, language_code_key());
    if (list_empty_is(codes)) {
      let v = ebible_language_en_code();
      codes = [v];
    }
    let l = list_join_plus(codes);
    html_hash_property_set(app_shared_bible_language_hash_key(), l);
  }
  ("reached from the settings hub, so back returns there");
  let back = app_shared_screen_later(context, app_shared_bible_settings);
  let choices_label = app_shared_languages_prompt_text();
  app_shared_bible_subset_screen_generic(
    context,
    languages,
    languages_chosen,
    "name",
    language_code_key(),
    on_change,
    choices_label,
    back,
  );
}

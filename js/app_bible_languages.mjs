import { ebible_languages } from "./ebible_languages.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
import { app_bible_languages_chosen_get } from "./app_bible_languages_chosen_get.mjs";
import { app_bible_subset_screen_generic } from "./app_bible_subset_screen_generic.mjs";
import { app_shared_languages_prompt_text } from "./app_shared_languages_prompt_text.mjs";
export function app_bible_languages(context) {
  let languages = ebible_languages();
  let languages_chosen = app_bible_languages_chosen_get();
  function on_change() {
    "write the chosen languages back to the url hash (key l) so the choice is shareable, survives a reload, and matches the chapter reader";
    let codes = list_map_property(languages_chosen, "language_code");
    if (list_empty_is(codes)) {
      codes = [ebible_language_en_code()];
    }
    let l = list_join_plus(codes);
    html_hash_property_set("l", l);
  }
  app_bible_subset_screen_generic(
    context,
    languages,
    languages_chosen,
    "name",
    "language_code",
    on_change,
    app_shared_languages_prompt_text(),
  );
}

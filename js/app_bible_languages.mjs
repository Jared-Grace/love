import { ebible_languages } from "./ebible_languages.mjs";
import { app_bible_languages_chosen_get } from "./app_bible_languages_chosen_get.mjs";
import { app_bible_subset_screen_generic } from "./app_bible_subset_screen_generic.mjs";
export function app_bible_languages(context) {
  let languages = ebible_languages();
  let languages_chosen = app_bible_languages_chosen_get(context);
  app_bible_subset_screen_generic(
    context,
    languages,
    languages_chosen,
    "name",
    "language_code",
    "languages_chosen",
    "Languages",
    "Order shown in verses",
  );
}

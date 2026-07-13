import { ebible_versions_english_choices_browser } from "./ebible_versions_english_choices_browser.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { list_filter_includes_not } from "./list_filter_includes_not.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map } from "./list_map.mjs";
export async function app_supper_choices() {
  let english = await ebible_versions_english_choices_browser();
  function lambda(code) {
    let choice = {
      name: code,
      bible_folder: code,
    };
    return choice;
  }
  let english_choices = list_map(english, lambda);
  let languages = ebible_languages();
  let languages_extra = list_filter_includes_not(
    languages,
    "bible_folder",
    english,
  );
  let choices = list_concat(english_choices, languages_extra);
  return choices;
}

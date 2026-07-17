import { ebible_versions_english_choices_browser } from "./ebible_versions_english_choices_browser.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { object_copy } from "./object_copy.mjs";
import { object_merge } from "./object_merge.mjs";
export async function ebible_languages_versions() {
  let english = await ebible_versions_english_choices_browser();
  function english_version(code) {
    let version = {
      name: code,
      bible_folder: code,
    };
    return version;
  }
  let english_versions = list_map(english, english_version);
  let languages = ebible_languages();
  let en = ebible_language_en_code();
  function versions_for(language) {
    let code = property_get(language, "language_code");
    let is_english = equal(code, en);
    if (is_english) {
      return english_versions;
    }
    let single = [language];
    return single;
  }
  function attach(language) {
    let versions = versions_for(language);
    let entry = object_copy(language);
    object_merge(entry, {
      versions,
    });
    return entry;
  }
  let versioned = list_map(languages, attach);
  return versioned;
}

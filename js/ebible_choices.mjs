import { ebible_languages_versions } from "./ebible_languages_versions.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
import { list_concat } from "./list_concat.mjs";
export async function ebible_choices() {
  let languages = await ebible_languages_versions();
  let en = ebible_language_en_code();
  let english = list_find_property(languages, "language_code", en);
  let english_versions = property_get(english, "versions");
  let others = list_filter_property_not(languages, "language_code", en);
  function versions_get(language) {
    let versions = property_get(language, "versions");
    return versions;
  }
  let other_versions = list_map_squash(others, versions_get);
  let choices = list_concat(english_versions, other_versions);
  return choices;
}

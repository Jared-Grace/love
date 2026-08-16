import { ebible_versions_commercial_ranked } from "./ebible_versions_commercial_ranked.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text_mapper } from "./list_sort_text_mapper.mjs";
import { null_is } from "./null_is.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_languages_commercial() {
  "Every language eBible has a translation in that this repo is free to ship and free to earn from, each one carrying the translations it may be read in with the fullest of them first.";
  "Not the list the apps show. That list is what somebody chose to ship, and shipping a language means its chapters were uploaded first - a language listed without them is an entry that opens onto nothing. This is the list to choose from.";
  "Grouped by the language code eBible's own copyright page links to, because that is the one word two translations of the same tongue are certain to agree on. Their folder names never agree and their written names agree only sometimes.";
  let ranked = await ebible_versions_commercial_ranked();
  let property_name = language_code_key();
  let groups = list_group_by_property(ranked, property_name);
  function language_of(group) {
    let versions = property_get(group, "items");
    let language_code = property_get(group, "key");
    let fullest = list_first(versions);
    let language_name = property_get(fullest, "language_name");
    ("A translation whose copyright page names no language falls back to what the translation calls itself, because a language with no name at all cannot be offered to anybody.");
    let unnamed = null_is(language_name);
    let name = language_name;
    if (unnamed) {
      name = property_get(fullest, "name");
    }
    let language = {
      name,
      language_code,
      versions,
    };
    return language;
  }
  let languages = list_map(groups, language_of);
  function by_name(language) {
    let name = property_get(language, "name");
    return name;
  }
  list_sort_text_mapper(languages, by_name);
  return languages;
}

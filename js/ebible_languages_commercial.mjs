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
    "The name is taken from whichever of the translations names the language, not from the fullest one, because being the fullest and naming the language are unrelated - the World English Bible holds all sixty six books and names no language at all, and it would have left English called The World English Bible.";
    function named_is(version) {
      let written = property_get(version, "language_name");
      let names = null_not_is(written);
      return names;
    }
    let naming = list_find(versions, named_is);
    "Where not one of them names it, the language is called what its first translation calls itself, because a language with no name at all cannot be offered to anybody.";
    let nameless = null_is(naming);
    let name = property_get(fullest, "name");
    if (not(nameless)) {
      name = property_get(naming, "language_name");
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

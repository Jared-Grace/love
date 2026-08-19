import { property_greater_than } from "./property_greater_than.mjs";
import { ebible_versions_preferred_first } from "./ebible_versions_preferred_first.mjs";
import { ebible_language_name_shown } from "./ebible_language_name_shown.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { ebible_versions_commercial_ranked } from "./ebible_versions_commercial_ranked.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text_mapper } from "./list_sort_text_mapper.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_languages_commercial() {
  "Every language eBible has a translation in that this repo is free to ship and free to earn from, each one carrying the translations it may be read in with the fullest of them first.";
  "Not the list the apps show. That list is what somebody chose to ship, and shipping a language means its chapters were uploaded first - a language listed without them is an entry that opens onto nothing. This is the list to choose from.";
  "Grouped by the language code eBible's own copyright page links to, because that is the one word two translations of the same tongue are certain to agree on. Their folder names never agree and their written names agree only sometimes.";
  let ranked = await ebible_versions_commercial_ranked();
  ("A package holding not one of the sixty six books is dropped before anything is grouped, because it is not a translation of the bible and offering its language opens a reader onto nothing at all. eBible ships some: Bau is an introduction page and a copyright notice with no book behind it, and Gamilaraay is fifteen chapters of an 1856 instruction booklet filed where no book code goes.");
  ("Counted next door and merely read here, and the count is trustworthy because a translation that was never downloaded cannot answer zero - the folder is not there and the listing throws. So none of the sixty six on disk means none of the sixty six, and never means nobody looked.");
  function scripture_is(version) {
    let holds = property_greater_than(version, "books_count", 0);
    return holds;
  }
  let scripture = list_filter(ranked, scripture_is);
  let property_name = language_code_key();
  let groups = list_group_by_property(scripture, property_name);
  function language_of(group) {
    let versions = property_get(group, "items");
    let language_code = property_get(group, "key");
    ("How full each translation is has ordered them by here, which is the whole of the order wherever a language offers only one real choice. Where it offers several the human's rule decides instead - modern ahead of archaic, close to the original ahead of retold - and that rule is not measurable from anything on disk, so it is written down per language and applied here.");
    ebible_versions_preferred_first(versions, language_code);
    let fullest = list_first(versions);
    ("The name is taken from whichever of the translations names the language, not from the fullest one, because being the fullest and naming the language are unrelated - the World English Bible holds all sixty six books and names no language at all, and it would have left English called The World English Bible.");
    function named_is(version) {
      let written = property_get(version, "language_name");
      let names = null_not_is(written);
      return names;
    }
    let naming = list_filter(versions, named_is);
    ("Where not one of them names it, the language is called what its first translation calls itself, because a language with no name at all cannot be offered to anybody.");
    let nameless = list_empty_is(naming);
    let as_eBible_wrote_it = property_get(fullest, "name");
    if (not(nameless)) {
      let first_naming = list_first(naming);
      as_eBible_wrote_it = property_get(first_naming, "language_name");
    }
    ("eBible writes a language's name as what its speakers call it followed by what English calls it in brackets, and seventy five of them have nothing before the bracket. Left as written those reach a reader as an empty bracket, so the name is read rather than taken.");
    let name = ebible_language_name_shown(as_eBible_wrote_it);
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

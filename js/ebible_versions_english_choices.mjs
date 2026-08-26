import { ebible_versions_english_full_web_family_not } from "./ebible_versions_english_full_web_family_not.mjs";
import { ebible_versions_commercial } from "./ebible_versions_commercial.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export async function ebible_versions_english_choices() {
  "Every complete English translation a reader may be offered to choose a wording from - the six printings of the World English Bible stand as none of them, and neither does any translation this repo is not free to ship and to earn from.";
  "THE TERMS ARE ASKED HERE BECAUSE THIS IS WHERE THE LIST LEAVES FOR READERS. The question used to be asked only of the one translation each language is offered in, and English is the one language offered as many, so twenty-five of them reached readers having been asked nothing - five of those on terms that forbid it. A list that is filtered where it is built cannot be offered unfiltered somewhere downstream.";
  "Asked of the licence pages each time rather than kept as a list of names, so a translation whose terms are read differently later, and one added after this was written, are both answered without anybody coming back here.";
  let english = await ebible_versions_english_full_web_family_not();
  let commercial = await ebible_versions_commercial();
  let property_name = bible_folder_key();
  let allowed = list_map_property(commercial, property_name);
  function allowed_is(bible_folder) {
    let found = list_includes(allowed, bible_folder);
    return found;
  }
  let english_choices = list_filter(english, allowed_is);
  return english_choices;
}

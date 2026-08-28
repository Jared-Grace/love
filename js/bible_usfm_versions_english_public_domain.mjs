import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_versions_english_choices_licences } from "./ebible_versions_english_choices_licences.mjs";
import { ebible_licence_public_domain } from "./ebible_licence_public_domain.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { ebible_bible_folder_version_word } from "./ebible_bible_folder_version_word.mjs";
import { list_map } from "./list_map.mjs";
export async function bible_usfm_versions_english_public_domain() {
  arguments_assert(arguments, 0);
  ("Every complete English translation eBible carries that nobody owns at all, each under the short word it is asked for by, the name it is called in print, and the folder its publisher packs it in.");
  ("PUBLIC DOMAIN IS A NARROWER QUESTION THAN THE ONE THE SHIPPING LIST ASKS, AND SINGING IS WHY. A translation given under share-alike terms may be shipped and earned from, so it passes the shipping question outright; but a song that repeats a word the passage says once is a new work made out of that translation, and share-alike then asks that the song be given away on the same terms as the translation it was built from. A text nobody owns asks nothing of the song at all - no credit line, no terms inherited, no restriction travelling on into whatever is made next.");
  ("So the two lists must not be folded together. Which translations may be shipped and which may be freely sung out of are different questions with different answers, and a reader wanting the second and given the first would take on a duty nobody told them about, at the moment they picked a wording rather than at the moment it cost them something.");
  ("Derived from the licence pages every time rather than written down as names, so a translation eBible adds, and one whose terms are read differently later, are both answered without anybody coming back here.");
  let licences = await ebible_versions_english_choices_licences();
  let unowned = ebible_licence_public_domain();
  function public_domain_is(licence_record) {
    let licence = property_get(licence_record, "licence");
    let free = equal(licence, unowned);
    return free;
  }
  let free_licences = list_filter(licences, public_domain_is);
  function entry(licence_record) {
    let bible_folder = property_get(licence_record, "bible_folder");
    let name = property_get(licence_record, "name");
    let version = ebible_bible_folder_version_word(bible_folder);
    let made = {
      version,
      name,
      bible_folder,
    };
    return made;
  }
  let entries = list_map(free_licences, entry);
  return entries;
}

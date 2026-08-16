import { ebible_language_bible_folder } from "./ebible_language_bible_folder.mjs";
import { ebible_languages_commercial } from "./ebible_languages_commercial.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_languages_commercial_single() {
  "Every language this repo is free to ship, carrying one translation each - the one next door with the choosing already done.";
  "One rather than all of them, because every translation shipped is a translation uploaded, and a language read in one bible costs a reader nothing less for the twenty one others sitting behind it. Where a second is worth offering it can be added to that language on its own.";
  "The one kept is whichever the list next door puts first, so the reason it was kept is written down there rather than again here.";
  let languages = await ebible_languages_commercial();
  let property_name = language_code_key();
  function single(language) {
    let name = property_get(language, "name");
    let language_code = property_get(language, property_name);
    let bible_folder = ebible_language_bible_folder(language);
    let one = {
      name,
      bible_folder,
      language_code,
    };
    return one;
  }
  let singles = list_map(languages, single);
  return singles;
}

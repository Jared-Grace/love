import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { ebible_language_bible_folder } from "./ebible_language_bible_folder.mjs";
import { ebible_languages_curated } from "./ebible_languages_curated.mjs";
import { ebible_versions_copyrights } from "./ebible_versions_copyrights.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_languages_curated_codes() {
  "Which languages the hand-written list already covers, named the way eBible names them rather than the way this repo stores them.";
  "Asked so that the generated list beside it can leave those languages alone. The two lists spell the same language differently - this repo has Turkish under two letters and eBible has it under three - so they cannot be compared as they are written, and comparing what they were written about is the only join that holds.";
  "Each entry is looked up by the folder it names, because a folder is one translation and one translation is in one language. The original-language entry is not a downloaded translation at all, so it is looked up, found missing, and left out.";
  "A folder with no eBible page is asked of the other catalogue before being given up on. Left out, it would say a language is uncovered while a reader is already being offered it, and the generated list beside this one would then add that language a second time from a different translation. So the fallback is not politeness towards a second source - it is what keeps this answer from being wrong the moment one exists.";
  let copyrights = await ebible_versions_copyrights();
  let curated = ebible_languages_curated();
  function code_or_null(language) {
    let bible_folder = ebible_language_bible_folder(language);
    let language_code = ebible_bible_folder_language_code_or_null(
      copyrights,
      bible_folder,
    );
    return language_code;
  }
  let covered = list_map_filter_null_not_is(curated, code_or_null);
  return covered;
}

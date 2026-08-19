import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { property_get } from "./property_get.mjs";
export function ebible_bible_folder_language_code_or_null(
  copyrights,
  bible_folder,
) {
  "What language a stored folder holds, named the way eBible names languages, or nothing when no source this app carries knows the folder at all.";
  "Both sources are asked, in the order the folders were acquired in: almost every folder came from eBible, so that page is looked for first and the other catalogue is only asked once looking there has failed.";
  "The catalogues are asked rather than the folder itself, because a folder is a pile of chapter files and none of them says what language it is in. The language is something the place it was fetched from said, and the only honest place to ask is there.";
  "Nothing is a real answer rather than a fault. The original-language text is not a downloaded translation and belongs to neither catalogue, so it is asked about, found in neither, and correctly said to have no eBible language name.";
  let property_name = bible_folder_key();
  let found = list_find_property_or_null(
    copyrights,
    property_name,
    bible_folder,
  );
  let missing = null_is(found);
  let code_key = language_code_key();
  if (missing) {
    let carried = door43_version_or_null(bible_folder);
    let unknown = null_is(carried);
    if (unknown) {
      return null;
    }
    let code = property_get(carried, code_key);
    return code;
  }
  let language_code = property_get(found, code_key);
  return language_code;
}

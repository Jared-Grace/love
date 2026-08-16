import { ebible_version_folder_language_code } from "./ebible_version_folder_language_code.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function ebible_version_language_code(copyright_read) {
  "Which language a translation is in - what its copyright page says, and where the page says nothing, what the name of its folder says.";
  "The page is believed first because it says so on purpose: eBible links each one to the entry for that language, and a link is a statement. The folder name is a filing word and only stood in for the statement where there is none.";
  "Measured before it was trusted. Of the fifteen hundred pages that do name a language, six name one the folder name disagrees with - and on all six the page is believed, so the disagreement never reaches anybody. The eleven pages that name none are the World English Bible family and Brenton's Septuagint, every one of them filed under eng, every one of them English.";
  let stated = property_get(copyright_read, "language_code");
  let unstated = null_is(stated);
  if (unstated) {
    let bible_folder = property_get(copyright_read, "bible_folder");
    let filed = ebible_version_folder_language_code(bible_folder);
    return filed;
  }
  return stated;
}

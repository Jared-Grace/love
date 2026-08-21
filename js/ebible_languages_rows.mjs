import { bible_folder_key } from "./bible_folder_key.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export function ebible_languages_rows(languages) {
  "Writes languages down in the short form the generated half of the list is stored in - three words each, in the order a record spells them, and no slot names.";
  "The twin of the one next door that reads them back. Kept as its own name because two things write the list out and both must lay it down the same way: the one that derives it from what eBible gives away, and the one that renders the file from itself to prove the short form lost nothing.";
  let folder_key = bible_folder_key();
  let code_key = language_code_key();
  function language_row(language) {
    let name = property_get(language, "name");
    let bible_folder = property_get(language, folder_key);
    let language_code = property_get(language, code_key);
    let row = [name, bible_folder, language_code];
    return row;
  }
  let rows = list_map(languages, language_row);
  return rows;
}

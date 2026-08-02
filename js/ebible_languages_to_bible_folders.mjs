import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
export function ebible_languages_to_bible_folders(language_codes) {
  let languages = ebible_languages();
  function lambda(c) {
    let bible_folder = list_find_property_get(
      languages,
      "language_code",
      c,
      bible_folder_key(),
    );
    return bible_folder;
  }
  let bible_folders = list_map(language_codes, lambda);
  return bible_folders;
}

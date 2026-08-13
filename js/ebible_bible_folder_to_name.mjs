import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
export function ebible_bible_folder_to_name(bible_folder) {
  "What the language of a bible is called, from the name of the folder its chapters are kept in.";
  "The other way round from the two next door, and needed because a link may name the folder rather than the language. A folder name is a filing word - nobody reading a screen should be shown one on its own.";
  let languages_list = ebible_languages();
  let property_name = bible_folder_key();
  let name = list_find_property_get(
    languages_list,
    property_name,
    bible_folder,
    "name",
  );
  return name;
}

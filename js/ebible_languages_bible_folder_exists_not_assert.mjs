import { bible_folder_key } from "./bible_folder_key.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { list_find_property_exists } from "./list_find_property_exists.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
export function ebible_languages_bible_folder_exists_not_assert(bible_folder) {
  let exists = list_find_property_exists(
    ebible_languages(),
    bible_folder_key(),
    bible_folder,
  );
  false_is_assert_json(exists, {
    hint: "this bible folder is already in the languages list -- would you like to add a different bible folder, or was this language already added?",
    bible_folder,
  });
}

import { list_find_property_get } from "./list_find_property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { bible_versions_commercial } from "./bible_versions_commercial.mjs";
import { bible_versions_commercial_language } from "./bible_versions_commercial_language.mjs";
export async function ebible_language_bible_folders_commercial(language_code) {
  "$plain language_code";
  "Every translation free to ship in one of the languages a reader can choose, named by the short code the reader's link carries.";
  "The link carries the short code the apps use (es), while each catalogue names a translation's language by its long one (spa). The language list joins them through the one translation it shows for that language: that translation's long code is the language whose other translations come along with it.";
  arguments_assert(arguments, 1);
  let languages = ebible_languages();
  let property_name = language_code_key();
  let shown = list_find_property_get(
    languages,
    property_name,
    language_code,
    "bible_folder",
  );
  let versions = await bible_versions_commercial();
  let long_code = list_find_property_get(
    versions,
    "bible_folder",
    shown,
    "language_code",
  );
  let bible_folders = await bible_versions_commercial_language(long_code);
  return bible_folders;
}

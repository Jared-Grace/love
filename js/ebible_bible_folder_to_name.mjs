import { ebible_language_bible_folders } from "./ebible_language_bible_folders.mjs";
import { list_find } from "./list_find.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
export function ebible_bible_folder_to_name(bible_folder) {
  "What the language of a bible is called, from the name of the folder its chapters are kept in.";
  "The other way round from the two next door, and needed because a link may name the folder rather than the language. A folder name is a filing word - nobody reading a screen should be shown one on its own.";
  "Every folder a language lists is looked through rather than only the one it is read in by default, because a language names several translations now and a link may name any of them.";
  let languages_list = ebible_languages();
  function holds_is(language) {
    let bible_folders = ebible_language_bible_folders(language);
    let holds = list_includes(bible_folders, bible_folder);
    return holds;
  }
  let found = list_find(languages_list, holds_is);
  let name = property_get(found, "name");
  return name;
}

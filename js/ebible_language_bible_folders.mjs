import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_empty_is_or_null } from "./list_empty_is_or_null.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { versions_key } from "./versions_key.mjs";
export function ebible_language_bible_folders(language) {
  "Every folder a language may be read from, the first of them being the one it is read from unless somebody chooses another.";
  "Asked for wherever the question runs the other way round - somebody arrives holding a folder and wants to know whose it is - because a folder now belongs to a language by being one of several rather than by being its only one.";
  "A language that lists no translations at all is one written before languages listed any, and its one folder is returned as a list of one so that both shapes answer this question the same way.";
  let property = versions_key();
  let versions = property_get_or_null(language, property);
  let property_name = bible_folder_key();
  let none = list_empty_is_or_null(versions);
  if (none) {
    let own = property_get(language, property_name);
    let only = [own];
    return only;
  }
  let bible_folders = list_map_property(versions, property_name);
  return bible_folders;
}

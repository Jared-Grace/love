import { bible_folder_key } from "./bible_folder_key.mjs";
import { ebible_versions_preferred } from "./ebible_versions_preferred.mjs";
import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
import { list_index_of_property } from "./list_index_of_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_move_first } from "./list_move_first.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function ebible_versions_preferred_first(versions, language_code) {
  "Puts a language's chosen translation at the head of the ones it offers, so that whoever reads only the first of them reads the chosen one.";
  "The order it arrives in is by how full each translation is, which is the right order wherever nothing has been chosen and the wrong one wherever something has. Moving one entry rather than sorting again keeps the rest of that order exactly as it was.";
  "A language nobody has chosen for is left alone, which is all but twelve of them.";
  let preferred = ebible_versions_preferred();
  let bible_folder = property_get_or_null(preferred, language_code);
  let unchosen = null_is(bible_folder);
  if (unchosen) {
    return;
  }
  ("A choice naming a translation the language does not offer is a mistake worth stopping on rather than quietly ignoring - it means either the name was mistyped or the translation stopped being one this repo may ship, and both change which bible a reader is handed.");
  let property_name = bible_folder_key();
  let offered = list_map_property(versions, property_name);
  let json = {
    language_code,
    offered,
  };
  list_includes_assert_json(offered, bible_folder, json);
  let index = list_index_of_property(versions, property_name, bible_folder);
  list_move_first(versions, index);
}

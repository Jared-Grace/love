import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_empty_is_or_null } from "./list_empty_is_or_null.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { versions_key } from "./versions_key.mjs";
export function ebible_language_bible_folder(language) {
  "Which folder a language is read from when nobody has chosen a translation - the first of the translations it lists.";
  "First rather than best, because first is a thing the list itself says and best is a thing somebody would have to keep saying. Whoever adds a translation to a language decides where it goes in the list, and that placing is the whole of the choosing.";
  "A language that lists no translations at all is one written before languages listed any, and it keeps its folder on itself. Both shapes are answered here so that the two can be mixed in one list while the list is being moved from the one shape to the other.";
  let property = versions_key();
  let versions = property_get_or_null(language, property);
  let none = list_empty_is_or_null(versions);
  let property_name = bible_folder_key();
  if (none) {
    let own = property_get(language, property_name);
    return own;
  }
  let first = list_first(versions);
  let bible_folder = property_get(first, property_name);
  return bible_folder;
}

import { list_first_property } from "./list_first_property.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_shared_bible_languages_verses_first_text(
  languages_verses,
  verse_number,
) {
  "The words the first language shown has under this verse number, or nothing when it has none or no language is there - so a check of which way the text reads finds nothing to mirror rather than failing.";
  let text = "";
  let empty = list_empty_is(languages_verses);
  if (empty) {
    return text;
  }
  let verses = list_first_property(languages_verses, "verses");
  let property_name = verse_number_key();
  let verse = list_find_property_or_null(verses, property_name, verse_number);
  let nn = null_not_is(verse);
  if (nn) {
    text = property_get_or(verse, "text", "");
  }
  return text;
}

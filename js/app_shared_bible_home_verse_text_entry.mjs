import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_shared_bible_home_verse_text_entry(
  item,
  verse_number_hash,
) {
  arguments_assert(arguments, 2);
  let verses_l = property_get(item, "verses");
  let property_name = verse_number_key();
  let verse_current_l = list_find_property_or_null(
    verses_l,
    property_name,
    verse_number_hash,
  );
  let nn = null_not_is(verse_current_l);
  if (nn) {
    let language = property_get(item, "language");
    let text_l = property_get(verse_current_l, "text");
    let v = {
      language,
      text: text_l,
    };
    return v;
  }
  return null;
}

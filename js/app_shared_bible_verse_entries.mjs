import { list_add } from "./list_add.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_verse_entries(
  languages_verses,
  verse_number,
  show_language_names,
) {
  let entries = [];
  function collect_language(entry) {
    let verses_l = property_get(entry, "verses");
    let verse_l = list_find_property_or_null(
      verses_l,
      "verse_number",
      verse_number,
    );
    let nn = null_not_is(verse_l);
    if (nn) {
      let text_l = property_get(verse_l, "text");
      let name = "";
      if (show_language_names) {
        let language = property_get(entry, "language");
        name = property_get(language, "name");
      }
      list_add(entries, {
        name,
        text: text_l,
      });
    }
  }
  each(languages_verses, collect_language);
  return entries;
}

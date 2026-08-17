import { arguments_assert } from "./arguments_assert.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { property_text_to } from "./property_text_to.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export function bible_verses_uplifting_package_upload_chapter_normalize(
  chapter_verses,
) {
  arguments_assert(arguments, 1);
  function verse_normalize(verse) {
    let property_name = verse_number_key();
    let value = property_text_to(verse, property_name);
    let property_name2 = verse_number_key();
    property_set(verse, property_name2, value);
  }
  each(chapter_verses, verse_normalize);
}

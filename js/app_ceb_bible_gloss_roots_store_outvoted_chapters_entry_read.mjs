import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_get } from "./list_get.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add } from "./list_add.mjs";
export function app_ceb_bible_gloss_roots_store_outvoted_chapters_entry_read(
  word_key,
  said,
) {
  arguments_assert(arguments, 2);
  function entry_read(found) {
    let chapter_code = property_get(found, "chapter_code");
    let entry = property_get(found, "entry");
    let claimed = property_get(found, "claimed");
    let count = list_size(claimed);
    let empty = equal(count, 0);
    if (empty) {
      return;
    }
    let word = property_get(entry, word_key);
    let lowered = text_lower_to(word);
    let first = list_get(claimed, 0);
    let root = text_lower_to(first);
    let places = property_initialize_list(said, lowered);
    list_add(places, {
      chapter: chapter_code,
      root: root,
    });
  }
  return entry_read;
}

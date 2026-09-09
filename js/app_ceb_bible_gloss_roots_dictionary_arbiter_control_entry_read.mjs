import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_get } from "./list_get.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
export function app_ceb_bible_gloss_roots_dictionary_arbiter_control_entry_read(
  word_key,
  said,
) {
  arguments_assert(arguments, 2);
  function entry_read(found) {
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
    let roots = property_initialize_list(said, lowered);
    list_add_if_not_includes(roots, root);
  }
  return entry_read;
}

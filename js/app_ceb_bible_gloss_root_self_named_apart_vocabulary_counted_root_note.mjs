import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
export function app_ceb_bible_gloss_root_self_named_apart_vocabulary_counted_root_note() {
  arguments_assert(arguments, 0);
  function root_note(holder, root, word) {
    let row = property_get_or_null(holder, root);
    let fresh = null_is(row);
    if (fresh) {
      let made = {
        named_root: root,
        sightings: 0,
        words: [],
      };
      property_set(holder, root, made);
      row = made;
    }
    let seen = property_get(row, "sightings");
    let value = add(seen, 1);
    property_set(row, "sightings", value);
    let words = property_get(row, "words");
    list_add_if_not_includes(words, word);
  }
  return root_note;
}

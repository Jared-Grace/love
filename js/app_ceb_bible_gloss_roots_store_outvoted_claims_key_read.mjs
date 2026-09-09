import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_join } from "./list_join.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
export function app_ceb_bible_gloss_roots_store_outvoted_claims_key_read(rows) {
  arguments_assert(arguments, 1);
  let claims = {};
  function row_read(row) {
    let word = property_get(row, "word");
    let said = property_get(row, "said");
    let given = property_get(row, "dictionary");
    let key = list_join([word, said, given], " ");
    let held = property_get_or_null(claims, key);
    let fresh = null_is(held);
    if (fresh) {
      let made = {
        word: word,
        said: said,
        dictionary: given,
        relation: property_get(row, "relation"),
        chapters: [],
      };
      property_set(claims, key, made);
      held = made;
    }
    let chapters = property_get(held, "chapters");
    let chapter = property_get(row, "chapter");
    list_add_if_not_includes(chapters, chapter);
  }
  each(rows, row_read);
  let keys = object_property_names(claims);
  let listed = [];
  function key_read(key) {
    let claim = property_get(claims, key);
    let chapters = property_get(claim, "chapters");
    let value = list_size(chapters);
    property_set(claim, "count", value);
    list_add(listed, claim);
  }
  return {
    keys,
    listed,
    key_read,
  };
}

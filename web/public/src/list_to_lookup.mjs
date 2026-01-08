import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_initialize_list } from "../../../love/public/src/object_property_initialize_list.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
import { list_to_dictionary } from "./list_to_dictionary.mjs";
export function list_to_lookup(property_key, list) {
  "if each key has one value, then " +
    list_to_dictionary.name +
    " but if each key corresponds to a list of values, then " +
    list_to_lookup;
  let verses = {};
  function lambda(word) {
    let n = object_property_exists_not(word, property_key);
    if (n) {
      return;
    }
    let v = object_property_get(word, property_key);
    let verse_words = object_property_initialize_list(verses, v);
    list_add(verse_words, word);
  }
  each(list, lambda);
  return verses;
}

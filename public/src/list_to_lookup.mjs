import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_initialize_list } from "../../../love/public/src/object_property_initialize_list.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
export function list_to_lookup(vid_property, words) {
  let verses = {};
  function lambda(word) {
    let n = object_property_exists_not(word, vid_property);
    if (n) {
      return;
    }
    let vid = object_property_get(word, vid_property);
    let verse_words = object_property_initialize_list(verses, vid);
    list_add(verse_words, word);
  }
  each(words, lambda);
  return verses;
}

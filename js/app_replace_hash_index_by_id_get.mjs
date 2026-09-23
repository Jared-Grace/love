import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { app_replace_hash_index_get } from "./app_replace_hash_index_get.mjs";
export function app_replace_hash_index_by_id_get(hash, key, list, id_get) {
  "The place in the list of the item a link names under this word, found by the item's own word for itself, or null when the link names none or names one the list does not have.";
  "The word is compared in small letters, because a link typed out by hand loses its capitals first, and every word an item is named by here is already small.";
  "A number is still read, counting from 1, because for a few hours links named rule sets and goals that way and one may already have been sent. No word an item is named by is made of digits alone - the check on these words says so - so the two can never be mistaken for each other.";
  let word = property_get_or_null(hash, key);
  if (null_is(word)) {
    return null;
  }
  let lower = text_lower_to(word);
  let ids = list_map(list, id_get);
  let named = list_includes(ids, lower);
  if (named) {
    let index = list_index_of(ids, lower);
    return index;
  }
  let index2 = app_replace_hash_index_get(hash, key, list);
  return index2;
}

import { text_url_decode } from "./text_url_decode.mjs";
import { catch_null } from "./catch_null.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { app_replace_hash_index_get } from "./app_replace_hash_index_get.mjs";
export function app_replace_hash_index_by_id_get(hash, key, list, ids_get) {
  "The place in the list of the item a link names under this word, found by the item's word for itself - the words asked for the whole list at once, because a goal's word is made short against the other goals of its set - or null when the link names none or names one the list does not have.";
  "The word is compared in small letters, because a link typed out by hand loses its capitals first, and every word an item is named by here is already small.";
  "The word is unescaped first, because a goal's word can hold commas and equals signs and is escaped when it is put into the address; a word that does not unescape - a stray percent sign typed by hand - is read as it stands, so the page falls back to the list rather than failing to open.";
  "A number is still read, counting from 1, because for a few hours links named rule sets and goals that way and one may already have been sent. No word an item is named by reads as a place in its own list - the check on these words says so - so the two can never be mistaken for each other.";
  let word = property_get_or_null(hash, key);
  if (null_is(word)) {
    return null;
  }
  function lambda() {
    let decoded2 = text_url_decode(word);
    return decoded2;
  }
  let decoded = catch_null(lambda) ?? word;
  let lower = text_lower_to(decoded);
  let ids = ids_get(list);
  let named = list_includes(ids, lower);
  if (named) {
    let index = list_index_of(ids, lower);
    return index;
  }
  let index2 = app_replace_hash_index_get(hash, key, list);
  return index2;
}

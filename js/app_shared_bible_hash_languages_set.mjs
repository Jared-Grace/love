import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_set } from "./property_set.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
export function app_shared_bible_hash_languages_set(hash, codes) {
  "Writes a list of language codes into a link, in the one shape every bible page reads them out of.";
  "A list with nothing in it takes the word out of the link altogether rather than leaving it there saying nothing, because a link that names no language means the language this repo opens in - and an empty word would be read as a list of one nameless language and fail on it.";
  let key = app_shared_bible_language_hash_key();
  let none = list_empty_is(codes);
  if (none) {
    property_delete_if_exists(hash, key);
    return;
  }
  let joined = list_join_plus(codes);
  property_set(hash, key, joined);
}

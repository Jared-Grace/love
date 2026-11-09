import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { html_hash_symbol } from "./html_hash_symbol.mjs";
import { hash_text_object } from "./hash_text_object.mjs";
import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_split_plus } from "./text_split_plus.mjs";
export function next_link_languages(url) {
  "$plain url";
  "The languages a next-passage link names, in the order it names them, or null when it names none.";
  "★ A LINK SENT TO SOMEBODY IS THEIR CHOICE WRITTEN DOWN. Whoever chose the languages chose them for that person, so the last link sent to them is where their languages are read from, and they carry on in the same ones.";
  let symbol = html_hash_symbol();
  let at = url.indexOf(symbol);
  if (less_than(at, 0)) {
    return null;
  }
  let hash_url = url.slice(at);
  let hash = hash_text_object(hash_url);
  let key = app_shared_bible_language_hash_key();
  let l = property_get_or(hash, key, null);
  if (equal(l, null)) {
    return null;
  }
  let languages = text_split_plus(l);
  return languages;
}

import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
export function app_bible_verse_set(verse_number) {
  html_hash_property_set(app_shared_bible_verse_hash_key(), verse_number);
}

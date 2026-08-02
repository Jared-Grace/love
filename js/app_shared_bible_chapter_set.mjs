import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
export function app_shared_bible_chapter_set(chapter_code) {
  html_hash_property_set(app_shared_bible_chapter_hash_key(), chapter_code);
}
